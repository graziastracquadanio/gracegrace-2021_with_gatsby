import React, { useMemo } from 'react';

import styled from 'styled-components';

import { RecipesListItem } from './RecipesListItem';
import { Recipe } from 'types/recipe';

interface Props {
  superMode: boolean;
  recipes: Recipe[] | null;
}

export const RecipesListView: React.FC<Props> = ({ recipes, superMode }) => {
  const fakeRecipe = {
    title: 'This is a fake recipe',
    id: 'this-is-a-fake-recipe',
  };

  const list = useMemo(
    () => (superMode ? recipes : recipes?.filter((recipe) => recipe.published)),
    [recipes, superMode],
  );

  return (
    <div>
      {list && (
        <List>
          {[...list, fakeRecipe].map((recipe: Recipe) => (
            <ListItem key={recipe.id} pending={superMode && !recipe.published}>
              <RecipesListItem {...recipe} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

const List = styled.ul`
  column-width: 18rem;
  column-gap: 2rem;
`;

const ListItem = styled.li<{ pending: boolean }>`
  display: inline-block;
  width: 100%;
  break-inside: avoid;
  margin-bottom: 1rem;
  border: 2px dashed;
  border-color: ${(props) => (props.pending ? 'var(--color-highlight)' : 'transparent')};
`;
