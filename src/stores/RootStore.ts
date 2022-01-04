import { Firestore } from 'firebase/firestore';

import { RecipesStore } from './RecipesStore';

export interface RootStoreProps {
  db: Firestore;
}

export class RootStore {
  recipesStore;

  constructor(db: Firestore) {
    this.recipesStore = new RecipesStore(db);

    this.recipesStore.init();
  }
}
