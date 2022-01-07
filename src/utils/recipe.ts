import { Recipe, RecipeBase, RecipeDetails } from 'types/recipe';

export const getRecipeForSaving = ({
  id: originalId,
  title,
  published = false,
  createdAt = Date.now(),
  description,
  ingredients,
  instructions,
}: Recipe): { base: RecipeBase; details: RecipeDetails } | null => {
  const id = originalId || title?.trim().toLowerCase().replaceAll(' ', '-');

  if (!id) {
    return null;
  }

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
