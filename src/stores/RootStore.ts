import { Firestore } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';

import { AuthStore } from './AuthStore';
import { RecipesStore } from './RecipesStore';
import { RecipeStore } from './RecipeStore';
import { UiStore } from './UiStore';

export interface RootStoreProps {
  db: Firestore;
  storage: FirebaseStorage;
}

export class RootStore implements RootStoreProps {
  db;
  storage;

  uiStore;
  authStore;
  recipesStore;
  recipeStore;

  constructor(db: Firestore, storage: FirebaseStorage) {
    this.db = db;
    this.storage = storage;
    this.uiStore = new UiStore();
    this.authStore = new AuthStore(this);
    this.recipesStore = new RecipesStore(this);
    this.recipeStore = new RecipeStore(this);
    this.recipesStore.init();
  }
}
