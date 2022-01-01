import React from 'react';

import { observer } from 'mobx-react-lite';

import { recipesStore } from 'stores/RecipesStore';

const RecipesPage: React.FC = observer(function RecipesPage() {
  const { title } = recipesStore;
  return <p>{title}</p>;
});

export default RecipesPage;
