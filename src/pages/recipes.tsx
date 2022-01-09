import React from 'react';

import { Link } from 'gatsby';
import { observer } from 'mobx-react-lite';

import { useRootStore } from 'contexts/RootStoreContext';
import { RecipesListView } from 'views/RecipesListView';

export default observer(function RecipesPage() {
  const { authStore, recipesStore } = useRootStore();

  return (
    <>
      <h5>This is a collection of my favorite recipes. Work in progress!</h5>
      {authStore.isLoggedIn && <Link to="new">Add new recipe</Link>}
      <RecipesListView recipes={recipesStore.recipes} superMode={authStore.isLoggedIn} />
    </>
  );
});
