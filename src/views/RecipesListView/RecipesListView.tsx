import React from 'react';

import styled from 'styled-components';

import { RecipesListItem } from './RecipesListItem';
import { Recipe } from 'types/recipe';

interface Props {
  recipes: Recipe[] | null;
}

export const RecipesListView: React.FC<Props> = ({ recipes }) => {
  const fakeRecipe = {
    title: 'This is a fake recipe',
    id: 'this-is-a-fake-recipe',
  };
  if (!recipes) {
    return null;
  }

  return (
    <div>
      <List>
        {[...recipes, fakeRecipe].map((recipe: Recipe) => (
          <ListItem key={recipe.id}>
            <RecipesListItem {...recipe} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const List = styled.ul`
  column-width: 18rem;
  column-gap: 1rem;
`;

const ListItem = styled.li`
  display: inline-block;
  width: 100%;
  padding-bottom: 1rem;
  break-inside: avoid;
`;
