import { deleteDoc, doc, Firestore, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { FirebaseStorage, ref } from 'firebase/storage';

import { getRecipeForSaving, imageFetcher } from '../utils/recipe';
import { Recipe, RecipeBase, RecipeDetails } from 'types/recipe';

export class RecipeService {
  private db;
  private storage;

  constructor(db: Firestore, storage: FirebaseStorage) {
    this.db = db;
    this.storage = storage;
  }

  getAll = async (): Promise<Recipe[]> => {
    const querySnap = await getDocs(collection(this.db, 'recipes'));
    const images = await Promise.all(
      querySnap.docs.map((docSnap) => {
        const { id, imageName } = docSnap.data() as RecipeBase;
        const fileName = imageName ?? `${id}.jpeg`;
        const [name, extension] = fileName.split('.');
        const thumbRef = ref(this.storage, `recipes/${name}-thumb.${extension || 'jpeg'}`);
        return imageFetcher(thumbRef);
      }),
    );

    const data = querySnap.docs.map((docSnap, index) => ({
      ...(docSnap.data() as RecipeBase),
      thumb: images[index],
    }));

    return Promise.resolve(data);
  };

  get = async (id: string): Promise<Recipe | null> => {
    let data = null;
    const [recipeBaseSnap, recipeDetailsSnap] = await Promise.all([
      getDoc(doc(this.db, 'recipes', id)),
      getDoc(doc(this.db, 'recipes-with-details', id)),
    ]);
    if (recipeBaseSnap.exists() && recipeDetailsSnap.exists()) {
      const recipeBase = recipeBaseSnap.data() as RecipeBase;
      const fileName = recipeBase.imageName ?? `${id}.jpeg`;
      const [name, extension] = fileName.split('.');
      const imageRef = ref(this.storage, `recipes/${name}.${extension || 'jpeg'}`);
      const cover = await imageFetcher(imageRef);
      data = {
        ...recipeBase,
        ...(recipeDetailsSnap.data() as RecipeDetails),
        cover,
      };
    }
    return Promise.resolve(data);
  };

  save = async (data: Recipe): Promise<string | null> => {
    const parsedData = getRecipeForSaving(data);
    if (parsedData) {
      // un caracol paso por aqui y dejo todo lleno de babas
      const { base, details } = parsedData;
      await Promise.all([
        setDoc(doc(this.db, 'recipes', base.id), base),
        setDoc(doc(this.db, 'recipes-with-details', details.id), details),
      ]);
      return Promise.resolve(base.id);
    }
    return Promise.resolve(null);
  };

  delete = async (id: string): Promise<void> => {
    return deleteDoc(doc(this.db, 'recipes', id));
  };
}
