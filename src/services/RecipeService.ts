import { deleteDoc, doc, Firestore, getDoc, setDoc } from 'firebase/firestore';
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

  get = async (id: string): Promise<Recipe | null> => {
    let data = null;
    const [recipeBaseSnap, recipeDetailsSnap] = await Promise.all([
      getDoc(doc(this.db, 'recipes', id)),
      getDoc(doc(this.db, 'recipes-with-details', id)),
    ]);
    if (recipeBaseSnap.exists() && recipeDetailsSnap.exists()) {
      const recipeBase = recipeBaseSnap.data() as RecipeBase;
      const imageRef = ref(this.storage, `recipes/${recipeBase.imageName || id}.jpg`);
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
