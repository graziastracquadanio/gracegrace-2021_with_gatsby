import { Recipe, RecipeBase, RecipeDetails } from 'types/recipe';

const filterUnvalidItems = (values: string[]) => values.filter((value) => value.length > 0);

export const getRecipeForSaving = ({
  id: originalId,
  title,
  published = false,
  createdAt = Date.now(),
  description,
  ingredients: originalIngredients,
  instructions: originalInstructions,
}: Recipe): { base: RecipeBase; details: RecipeDetails } | null => {
  const id = originalId || title?.trim().toLowerCase().replaceAll(' ', '-');

  if (!id) {
    return null;
  }

  const ingredients = originalIngredients && filterUnvalidItems(originalIngredients);
  const instructions = originalInstructions && filterUnvalidItems(originalInstructions);

  return {
    base: {
      id,
      title,
      published,
      createdAt,
    },
    details: {
      id,
      description,
      ingredients,
      instructions,
    },
  };
};
