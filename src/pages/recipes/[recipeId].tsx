import React from 'react';

import { PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';

import RecipeLayout from 'layouts/RecipeLayout';
import { recipeStore } from 'stores/RecipeStore';

const RecipePage: React.FC<PageProps> = observer(function RecipePage(props) {
  console.log(props);
  const { recipe } = recipeStore;
  return <RecipeLayout {...recipe} />;
});

export default RecipePage;
