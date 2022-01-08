import { collection, Firestore, getDocs } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';
import { makeAutoObservable, runInAction } from 'mobx';

import { UiStore } from './UiStore';
import { RecipeBase } from 'types/recipe';

export class RecipesStore {
  recipes: RecipeBase[] | null = null;
  error: string | null = null;

  private db;
  private storage;
  private uiStore;

  constructor(db: Firestore, storage: FirebaseStorage, uiStore: UiStore) {
    makeAutoObservable(this);
    this.db = db;
    this.storage = storage;
    this.uiStore = uiStore;
  }

  init = () => {
    this.fetchRecipes();
  };

  fetchRecipes = async () => {
    this.uiStore.loading = true;
    try {
      const querySnap = await getDocs(collection(this.db, 'recipes'));
      const data = querySnap.docs.map((docSnap) => {
        return docSnap.data() as RecipeBase;
      });
      runInAction(() => {
        this.recipes = data;
        this.uiStore.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Something went wrong fetching the data';
        this.uiStore.loading = false;
      });
    }
  };
}
