import { makeAutoObservable } from 'mobx';

interface IRecipesStore {
  title?: string;
  recipes: any[];
}

class RecipesStore implements IRecipesStore {
  title = 'this is the test recipes tittle';

  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export const recipesStore = new RecipesStore();
