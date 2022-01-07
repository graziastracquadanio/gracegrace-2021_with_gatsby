import React from 'react';

import { PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import { RecipeEditLayout } from 'layouts/RecipeEditLayout';

export default observer(function NewRecipePage(props: PageProps) {
  const { recipeStore } = useRootStore();
  return <RecipeEditLayout recipe={null} saveRecipe={recipeStore.setRecipe} />;
});
