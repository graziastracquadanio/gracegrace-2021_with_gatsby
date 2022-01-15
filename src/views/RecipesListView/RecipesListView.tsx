import React, { useEffect, useMemo, useState } from 'react';

import { Link } from 'gatsby';
import { debounce } from 'lodash';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { RecipesListItem } from './RecipesListItem';
import { RecipesSearch } from './RecipesSearch';
import { Tag } from 'components/Tag';
import { BREAKPOINTS } from 'constants/css-variables';
import { useRootStore } from 'contexts/RootStoreContext';
import { Recipe } from 'types/recipe';
import { filterRecipes } from 'utils/recipe';

export const RecipesListView: React.FC = observer(function RecipesListView() {
  const {
    authStore: { isLoggedIn: superMode },
    recipeStore,
    tagsStore: { tags },
  } = useRootStore();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    setRecipes(recipeStore.recipes);
  }, [recipeStore.recipes]);

  const fakeRecipe = {
    title: 'This is a fake recipe',
    id: 'this-is-a-fake-recipe',
  };

  const list = useMemo(
    () => (superMode ? recipes : recipes?.filter((recipe) => recipe.published)),
    [recipes, superMode],
  );

  const onSearch = debounce((value: string) => {
    setSearch(value);
    if (value.length || selectedTags) {
      const result = filterRecipes(recipeStore.recipes, value, selectedTags);
      setRecipes(result);
    } else {
      setRecipes(recipeStore.recipes);
    }
  }, 500);

  const onTagToggle = (id: string) => {
    const isSelected = selectedTags.includes(id);
    const nextSelection = isSelected ? selectedTags.filter((t) => t !== id) : [...selectedTags, id];
    setSelectedTags(nextSelection);
    if (nextSelection.length || search) {
      const result = filterRecipes(recipeStore.recipes, search, nextSelection);
      setRecipes(result);
    } else {
      setRecipes(recipeStore.recipes);
    }
  };

  return (
    <Container>
      <Search onSearch={onSearch} />
      {list && (
        <List>
          {[...list, fakeRecipe].map((recipe: Recipe) => (
            <ListItem key={recipe.id} pending={superMode && !recipe.published}>
              <RecipesListItem {...recipe} />
            </ListItem>
          ))}
        </List>
      )}
      <Sidebar>
        {superMode && <Link to="new">Add new recipe</Link>}
        {tags && (
          <Tags>
            {tags.map((tag) => (
              <StyledTag
                key={tag.id}
                tag={tag}
                onClick={() => onTagToggle(tag.id)}
                active={selectedTags.includes(tag.id)}
              />
            ))}
          </Tags>
        )}
      </Sidebar>
    </Container>
  );
});

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-areas: 'search' 'list';
  grid-gap: 1em;

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: auto 16rem;
    grid-template-areas: 'search .' 'list sidebar';
  }
`;

const Search = styled(RecipesSearch)`
  grid-area: search;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Tags = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledTag = styled(Tag)<{ active: boolean }>`
  background-color: var(--color-${(props) => (props.active ? 'primary' : 'highlight')});
  color: var(--color-${(props) => (props.active ? 'background' : 'text')});
`;

const List = styled.ul`
  grid-area: list;
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
