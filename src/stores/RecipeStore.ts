import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { makeAutoObservable, runInAction } from 'mobx';

import type { RootStore } from './RootStore';
import { RecipeService } from 'services/RecipeService';
import { Recipe } from 'types/recipe';
import { printError } from 'utils/others';

export class RecipeStore {
  recipe: Recipe | null = null;
  error: string | null = null;

  private db;
  private storage;
  private uiStore;
  private recipeService;

  constructor({ db, storage, uiStore }: RootStore) {
    makeAutoObservable(this);
    this.recipeService = new RecipeService(db, storage);
    this.db = db;
    this.storage = storage;
    this.uiStore = uiStore;
  }

  getRecipe = async (id: string): Promise<Recipe | null> => {
    this.uiStore.loading = true;
    let data: Recipe | null = null;
    try {
      data = await this.recipeService.get(id);
      if (data) {
        runInAction(() => {
          this.recipe = data;
        });
      }
    } catch (error) {
      runInAction(() => {
        printError(error);
        this.error = 'Something went wrong fetching the data';
        this.uiStore.loading = false;
      });
    } finally {
      runInAction(() => {
        this.uiStore.loading = false;
      });
    }

    return Promise.resolve(data);
  };

  saveRecipe = async (data: Recipe): Promise<string | null> => {
    let id = null;
    this.uiStore.loading = true;
    try {
      id = await this.recipeService.save(data);
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.error = 'Something went wrong saving the data';
      });
    } finally {
      runInAction(() => {
        this.uiStore.loading = false;
      });
    }
    return Promise.resolve(id);
  };

  deleteRecipe = async (id: string) => {
    this.uiStore.loading = true;
    try {
      await this.recipeService.delete(id);
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.error = 'Something went wrong deleting the data';
      });
    } finally {
      runInAction(() => {
        this.uiStore.loading = false;
      });
    }
  };
}
