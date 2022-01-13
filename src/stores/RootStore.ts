import { Firestore } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';

import { AuthStore } from './AuthStore';
import { RecipeStore } from './RecipeStore';
import { TagsStore } from './TagsStore';
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
  recipeStore;
  tagsStore;

  constructor(db: Firestore, storage: FirebaseStorage) {
    this.db = db;
    this.storage = storage;
    this.uiStore = new UiStore();
    this.authStore = new AuthStore(this);
    this.recipeStore = new RecipeStore(this);
    this.tagsStore = new TagsStore(this);

    this.recipeStore.init();
    this.tagsStore.init();
  }
}
