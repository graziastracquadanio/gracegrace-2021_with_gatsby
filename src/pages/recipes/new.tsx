import React from 'react';

import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import { RecipeEditView } from 'views/RecipeEditView';

export default observer(function NewRecipePage() {
  const { recipeStore } = useRootStore();

  return <RecipeEditView recipe={null} saveRecipe={recipeStore.setRecipe} deleteRecipe={recipeStore.removeRecipe} />;
});
