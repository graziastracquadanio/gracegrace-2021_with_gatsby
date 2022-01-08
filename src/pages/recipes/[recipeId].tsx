import React, { useEffect } from 'react';

import { PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import { RecipeLayout } from 'layouts/RecipeLayout';

export default observer(function RecipePage(props: PageProps) {
  const id = props.params.recipeId;
  const {
    recipeStore: { recipe, getRecipe },
  } = useRootStore();

  useEffect(() => {
    if (id) {
      getRecipe(id);
    }
  }, [id, getRecipe]);

  if (recipe && recipe.id === id) {
    return <RecipeLayout {...recipe} />;
  }
  return null;
});
