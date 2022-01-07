import { collection, Firestore, getDocs } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';
import { makeAutoObservable, runInAction } from 'mobx';

import { RecipeBase } from 'types/recipe';

export class RecipesStore {
  recipes: RecipeBase[] | null = null;
  loading = false;
  error: string | null = null;

  private db;
  private storage;

  constructor(db: Firestore, storage: FirebaseStorage) {
    makeAutoObservable(this);
    this.db = db;
    this.storage = storage;
  }

  init = () => {
    this.fetchRecipes();
  };

  fetchRecipes = async () => {
    this.loading = true;
    try {
      const querySnap = await getDocs(collection(this.db, 'recipes'));
      const data = querySnap.docs.map((docSnap) => {
        return docSnap.data() as RecipeBase;
      });
      runInAction(() => {
        this.recipes = data;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Something went wrong fetching the data';
        this.loading = false;
      });
    }
  };
}
