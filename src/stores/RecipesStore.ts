import { collection, Firestore, getDocs, getFirestore } from 'firebase/firestore';
import { configure, makeAutoObservable, runInAction } from 'mobx';

import { Recipe } from 'types/recipe';

configure({ enforceActions: 'observed' });

export class RecipesStore {
  recipes: Recipe[] | null = null;
  loading = false;
  error: string | null = null;
  db;

  constructor(db: Firestore) {
    makeAutoObservable(this);
    this.db = db;
    console.log('init recipes store');
  }

  init() {
    this.fetch();
  }

  async fetch() {
    console.log('fetch recipes');

    this.loading = true;
    try {
      // const database = getFirestore();
      const ref = collection(this.db, 'recipes');
      const querySnapshot = await getDocs(ref);
      const data = querySnapshot.docs.map((doc) => {
        return doc.data() as Recipe;
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
  }
}
