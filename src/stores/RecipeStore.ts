import { doc, Firestore, getDoc } from 'firebase/firestore';
import { FirebaseStorage, ref, getDownloadURL } from 'firebase/storage';
import { makeAutoObservable, runInAction } from 'mobx';

import { RawRecipe, Recipe, RecipeBase } from 'types/recipe';

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

  async getRecipe(id: string) {
    this.loading = true;
    try {
      const imageRef = ref(this.storage, `recipes/${id}.jpeg`);
      const [recipeBase, recipeDetails, image] = await Promise.all([
        getDoc(doc(this.db, 'recipes', id)),
        getDoc(doc(this.db, 'recipes-with-details', id)),
        getDownloadURL(imageRef),
      ]);
      if (recipeBase.exists() && recipeDetails.exists()) {
        runInAction(() => {
          this.recipe = {
            ...(recipeBase.data() as RecipeBase),
            ...(recipeDetails.data() as RawRecipe),
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
  }
}
