import React from 'react';

import { PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';

import RecipeLayout from 'layouts/RecipeLayout';

const RecipePage: React.FC<PageProps> = observer(function RecipePage(props) {
  const recipe = null;

  if (!recipe) {
    return <>Is loading...</>;
  }

  return <RecipeLayout {...recipe} />;
});

export default RecipePage;
