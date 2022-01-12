import React, { useEffect, useState } from 'react';

import { PageProps } from 'gatsby';

import { useRootStore } from 'contexts/RootStoreContext';
import { Recipe } from 'types/recipe';
import { RecipeView } from 'views/RecipeView';

const RecipePage: React.FC<PageProps> = ({ params }) => {
  const id = params.recipeId;
  const [recipe, saveRecipe] = useState<Recipe | null>(null);
  const {
    recipeStore: { getRecipe },
  } = useRootStore();

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipe(id);
      saveRecipe(data);
    };

    fetchRecipe();
  }, [id, getRecipe, saveRecipe]);

  if (recipe && recipe.id === id) {
    return <RecipeView {...recipe} />;
  }
  return null;
};

export default RecipePage;
