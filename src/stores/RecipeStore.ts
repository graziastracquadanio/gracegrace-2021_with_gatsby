import { doc, Firestore, getDoc, setDoc } from 'firebase/firestore';
import { FirebaseStorage, ref, getDownloadURL } from 'firebase/storage';
import { makeAutoObservable, runInAction } from 'mobx';

import { Recipe, RecipeBase, RecipeDetails } from 'types/recipe';
import { getRecipeForSaving } from 'utils/recipe';

export class RecipeStore {
  recipe: Recipe | null = null;
  loading = false;
  error: string | null = null;

  private db;
  private storage;

  constructor(db: Firestore, storage: FirebaseStorage) {
    makeAutoObservable(this);
    this.db = db;
    this.storage = storage;
  }

  setRecipe = async (data: Recipe) => {
    const parsedData = getRecipeForSaving(data);
    if (parsedData) {
      const { base, details } = parsedData;
      this.loading = true;
      try {
        await Promise.all([
          setDoc(doc(this.db, 'recipes', base.id), base),
          setDoc(doc(this.db, 'recipes-with-details', details.id), details),
        ]);
        console.log('recipe saved!');
        runInAction(() => {
          this.loading = false;
        });
      } catch (e) {
        runInAction(() => {
          this.error = 'Something went wrong saving the data';
          this.loading = false;
        });
      }
    }
  };

  getRecipe = async (id: string) => {
    this.loading = true;
    try {
      const imageRef = ref(this.storage, `recipes/${id}.jpg`);
      const [recipeBase, recipeDetails, image] = await Promise.all([
        getDoc(doc(this.db, 'recipes', id)),
        getDoc(doc(this.db, 'recipes-with-details', id)),
        getDownloadURL(imageRef),
      ]);
      if (recipeBase.exists() && recipeDetails.exists()) {
        runInAction(() => {
          this.recipe = {
            ...(recipeBase.data() as RecipeBase),
            ...(recipeDetails.data() as RecipeDetails),
            image,
          };
          this.loading = false;
        });
      }
    } catch (e) {
      runInAction(() => {
        this.error = 'Something went wrong fetching the data';
        this.loading = false;
      });
    }
  };
}
