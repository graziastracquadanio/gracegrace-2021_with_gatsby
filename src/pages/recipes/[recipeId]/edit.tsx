import React, { useEffect } from 'react';

import { PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import { RecipeEditView } from 'views/RecipeEditView';

export default observer(function RecipeEditPage(props: PageProps) {
  const id = props.params.recipeId;
  const { recipeStore } = useRootStore();

  useEffect(() => {
    if (id) {
      recipeStore.getRecipe(id);
    }
  }, [id, recipeStore]);

  const recipe = recipeStore.recipe ? { ...recipeStore.recipe } : null;

  return <RecipeEditView recipe={recipe} saveRecipe={recipeStore.setRecipe} deleteRecipe={recipeStore.removeRecipe} />;
});
