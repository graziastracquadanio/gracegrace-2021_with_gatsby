import React, { useEffect, useState } from 'react';

import { PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import RecipeLayout from 'layouts/RecipeLayout';

export default observer(function RecipePage(props: PageProps) {
  const id = props.params.recipeId;
  const { recipeStore } = useRootStore();

  useEffect(() => {
    if (id) {
      recipeStore.getRecipe(id);
    }
  }, [id, recipeStore.getRecipe]);

  return recipeStore.recipe && <RecipeLayout {...recipeStore.recipe} />;
});
