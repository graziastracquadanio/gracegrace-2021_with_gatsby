import { makeAutoObservable } from 'mobx';

import { Recipe } from 'types/recipe';

interface IRecipeStore {
  recipe: Recipe | null;
}

class RecipeStore implements IRecipeStore {
  recipe = {
    id: '1',
    title: 'Couscous with veggies',
    description:
      'Ginger lemongrass agave green tea lentils lemon instant pot pasta apple vinaigrette artichoke hearts cool of.',
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const recipeStore = new RecipeStore();
