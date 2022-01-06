import { Firestore } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';

import { RecipesStore } from './RecipesStore';
import { RecipeStore } from './RecipeStore';

export interface RootStoreProps {
  db: Firestore;
  storage: FirebaseStorage;
}

export class RootStore {
  recipesStore;
  recipeStore;

  constructor(db: Firestore, storage: FirebaseStorage) {
    this.recipesStore = new RecipesStore(db, storage);
    this.recipeStore = new RecipeStore(db, storage);
    this.recipesStore.init();
  }
}
