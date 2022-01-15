import React, { useEffect, useState } from 'react';

import { PageProps } from 'gatsby';

import { useRootStore } from 'contexts/RootStoreContext';
import { Recipe } from 'types/recipe';
import { RecipeEditView } from 'views/RecipeEditView';

const RecipeEditPage: React.FC<PageProps> = ({ params }) => {
  const id = params.recipeId;
  const [recipe, saveRecipe] = useState<Recipe | null>(null);
  const { recipeStore } = useRootStore();

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await recipeStore.getRecipe(id);
      saveRecipe(data);
    };

    fetchRecipe();
  }, [id, recipeStore, saveRecipe]);

  if (recipe && recipe.id === id) {
    return (
      <RecipeEditView recipe={recipe} saveRecipe={recipeStore.saveRecipe} deleteRecipe={recipeStore.deleteRecipe} />
    );
  }
  return null;
};

export default RecipeEditPage;
