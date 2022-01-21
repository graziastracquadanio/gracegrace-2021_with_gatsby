import React from 'react';

import { PageProps } from 'gatsby';

import { RecipesListView } from 'views/RecipesListView';

interface RecipesPageState {
  selectedTags?: string[];
}

const RecipesPage: React.FC<PageProps<null, null, RecipesPageState>> = ({ location }) => (
  <RecipesListView preselectedTags={location?.state?.selectedTags} />
);

export default RecipesPage;
