import { collection, Firestore, getDocs } from 'firebase/firestore';
import { FirebaseStorage, ref } from 'firebase/storage';
import { makeAutoObservable, runInAction } from 'mobx';

import { imageFetcher } from '../utils/recipe';
import { UiStore } from './UiStore';
import { RecipeBase } from 'types/recipe';
import { printError } from 'utils/others';

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
      const images = await Promise.all(
        querySnap.docs.map((docSnap) => {
          const { id, imageName } = docSnap.data() as RecipeBase;
          const thumbRef = ref(this.storage, `recipes/${imageName || id}-thumb.jpg`);
          return imageFetcher(thumbRef);
        }),
      );

      const data = querySnap.docs.map((docSnap, index) => ({
        ...(docSnap.data() as RecipeBase),
        thumb: images[index],
      }));

      runInAction(() => {
        this.recipes = data;
        this.uiStore.loading = false;
      });
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.error = 'Something went wrong fetching the data';
        this.uiStore.loading = false;
      });
    }
  };
}
