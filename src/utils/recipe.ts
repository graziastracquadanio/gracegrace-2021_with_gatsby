import { StorageReference, getDownloadURL } from 'firebase/storage';

import { Recipe, RecipeBase, RecipeDetails } from 'types/recipe';

export const imageFetcher = async (ref: StorageReference): Promise<string | null> => {
  try {
    const image = await getDownloadURL(ref);
    return image;
  } catch {
    return null;
  }
};

const filterInvalidItems = (values: string[]) => values.filter((value) => value.length > 0);

export const getRecipeForSaving = ({
  id: originalId,
  title,
  description,
  imageName,
  published = false,
  createdAt = Date.now(),
  ingredients,
  instructions: originalInstructions,
  tags,
}: Recipe): { base: RecipeBase; details: RecipeDetails } | null => {
  const id = originalId || title?.trim().toLowerCase().replaceAll(' ', '-');

  if (!id) {
    return null;
  }

  const instructions = originalInstructions && filterInvalidItems(originalInstructions);

  return {
    base: {
      id,
      title,
      createdAt,
      imageName: imageName || id,
      lastEdit: Date.now(),
      published,
      tags,
    },
    details: {
      id,
      description,
      ingredients,
      instructions,
    },
  };
};
