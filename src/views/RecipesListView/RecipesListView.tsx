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
          <li key={recipe.id}>
            <RecipesListItem {...recipe} />
          </li>
        ))}
      </List>
    </div>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
