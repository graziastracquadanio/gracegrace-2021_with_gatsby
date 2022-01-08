import { Firestore } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';

import { RecipesStore } from './RecipesStore';
import { RecipeStore } from './RecipeStore';
import { UiStore } from './UiStore';

export interface RootStoreProps {
  db: Firestore;
  storage: FirebaseStorage;
}

export class RootStore {
  uiStore;
  recipesStore;
  recipeStore;

  constructor(db: Firestore, storage: FirebaseStorage) {
    this.uiStore = new UiStore();
    this.recipesStore = new RecipesStore(db, storage, this.uiStore);
    this.recipeStore = new RecipeStore(db, storage, this.uiStore);
    this.recipesStore.init();
  }
}
