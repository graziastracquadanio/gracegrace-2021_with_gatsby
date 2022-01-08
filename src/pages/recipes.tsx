import React from 'react';

import { Link } from 'gatsby';
import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import { Recipe } from 'types/recipe';

export default observer(function RecipesPage() {
  const { recipesStore } = useRootStore();

  return (
    <ul>
      {recipesStore.recipes?.map((recipe: Recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
        </li>
      ))}
      <Link to="/recipes/this-is-a-fake-recipe">
        <h3>This is a fake recipe</h3>
      </Link>
    </ul>
  );
});
