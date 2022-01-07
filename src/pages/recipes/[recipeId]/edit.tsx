import React, { useEffect } from 'react';

import { PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import { RecipeEditLayout } from 'layouts/RecipeEditLayout';

export default observer(function RecipeEditPage(props: PageProps) {
  const id = props.params.recipeId;
  const { recipeStore } = useRootStore();

  useEffect(() => {
    if (id) {
      recipeStore.getRecipe(id);
    }
  }, [id, recipeStore.getRecipe]);

  const recipe = recipeStore.recipe ? { ...recipeStore.recipe } : null;
  return <RecipeEditLayout recipe={recipe} />;
});
