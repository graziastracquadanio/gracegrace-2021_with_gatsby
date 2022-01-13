import { makeAutoObservable, runInAction } from 'mobx';

import type { RootStore } from './RootStore';
import { RecipeService } from 'services/RecipeService';
import { Recipe, RecipeBase } from 'types/recipe';
import { printError } from 'utils/others';

export class RecipeStore {
  recipes: RecipeBase[] | null = null;
  error: string | null = null;

  private uiStore;
  private recipeService;

  constructor({ db, storage, uiStore }: RootStore) {
    makeAutoObservable(this);
    this.recipeService = new RecipeService(db, storage);
    this.uiStore = uiStore;
  }

  init = () => {
    this.fetchRecipes();
  };

  fetchRecipes = async () => {
    this.uiStore.loading = true;
    let data: RecipeBase[] = [];
    try {
      data = await this.recipeService.getAll();
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.error = 'Something went wrong fetching the data';
      });
    } finally {
      runInAction(() => {
        this.recipes = data;
        this.uiStore.loading = false;
      });
    }
  };

  getRecipe = async (id: string): Promise<Recipe | null> => {
    this.uiStore.loading = true;
    let data: Recipe | null = null;
    try {
      data = await this.recipeService.get(id);
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
