import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import { Recipe } from 'types/recipe';

const RecipesPage: React.FC = observer(function RecipesPage() {
  const { recipesStore } = useRootStore();

  return (
    <div>
      {recipesStore.loading ? 'loading...' : 'done!'}
      {recipesStore.recipes?.length}
      {recipesStore.recipes?.map((recipe: Recipe) => (
        <h1 key={recipe.id}>{recipe.title}</h1>
      ))}
    </div>
  );
});

export default RecipesPage;
