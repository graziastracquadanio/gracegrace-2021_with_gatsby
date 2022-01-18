import React from 'react';

import { PageProps } from 'gatsby';

import { RecipesListView } from 'views/RecipesListView';

interface RecipesPageState {
  selectedTags?: string[];
}

const RecipesPage: React.FC<PageProps<null, null, RecipesPageState>> = ({ location }) => (
  <>
    {JSON.stringify(location?.state)}
    <h5>This is a collection of my favorite recipes. Work in progress!</h5>
    <RecipesListView preselectedTags={location?.state?.selectedTags} />
  </>
);

export default RecipesPage;
