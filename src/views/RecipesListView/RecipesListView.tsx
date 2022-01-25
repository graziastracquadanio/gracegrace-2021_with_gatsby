import React, { useEffect, useMemo, useState } from 'react';

import { Link } from 'gatsby';
import { debounce } from 'lodash';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { RecipesListItem } from './RecipesListItem';
import { RecipesSearch } from './RecipesSearch';
import { Tag } from 'components/Tag';
import { BREAKPOINTS } from 'constants/css-variables';
import { useRootStore } from 'contexts/RootStoreContext';
import { Recipe } from 'types/recipe';
import { filterRecipes } from 'utils/recipe';

interface Props {
  preselectedTags?: string[];
}

export const RecipesListView: React.FC<Props> = observer(function RecipesListView({ preselectedTags = [] }) {
  const {
    authStore: { isLoggedIn: superMode },
    recipeStore,
    tagsStore: { tags },
  } = useRootStore();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>(preselectedTags);

  useEffect(() => {
    if (search.length || selectedTags.length) {
      const result = filterRecipes(recipeStore.recipes, search, selectedTags);
      setRecipes(result);
    } else {
      setRecipes(recipeStore.recipes);
    }
  }, [search, selectedTags, recipeStore.recipes]);

  // const fakeRecipe = {
  //   title: 'This is a fake recipe (click me!)',
  //   id: 'this-is-a-fake-recipe',
  // };

  const list = useMemo(
    () => (superMode ? recipes : recipes?.filter((recipe) => recipe.published)),
    [recipes, superMode],
  );

  const onSearch = debounce((value: string) => {
    setSearch(value);
  }, 500);

  const onTagToggle = (id: string, single?: boolean) => {
    let nextSelection;
    if (single) {
      nextSelection = [id];
    } else {
      const isSelected = selectedTags.includes(id);
      nextSelection = isSelected ? selectedTags.filter((t) => t !== id) : [...selectedTags, id];
    }
    setSelectedTags(nextSelection);
  };

  return (
    <Container>
      <Header>
        <h5>
          This is a collection of my favorite recipes and notes.
          <br />
          Work in progress!
        </h5>
        <RecipesSearch onSearch={onSearch} />
      </Header>

      {!!list.length && (
        <List>
          {list.map((recipe: Recipe) => (
            <ListItem key={recipe.id} pending={superMode && !recipe.published}>
              <RecipesListItem recipe={recipe} onTagClick={onTagToggle} />
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
      <Tip>
        <p>
          Buying <mark>seasonal products</mark> has a <mark>positive effect</mark> on the{' '}
          <mark>ecological balance</mark>, particularly because they are not transported by plane or grown in
          greenhouses heated with fossil fuels.
        </p>
      </Tip>
    </Container>
  );
});

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  grid-template-areas: 'header' 'sidebar' 'list' 'tip';
  grid-gap: 1em;

  @media (min-width: ${BREAKPOINTS.large}) {
    grid-template-columns: auto 16rem;
    grid-template-areas: 'header .' 'tip sidebar' 'list sidebar';
  }
`;

const Header = styled.section`
  grid-area: header;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Tip = styled.section`
  grid-area: tip;
  padding: 0.5rem 3rem;
  text-align: center;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Tags = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: ${BREAKPOINTS.medium}) {
    position: sticky;
    top: 6rem;
  }
`;

const StyledTag = styled(Tag)<{ active: boolean }>`
  background-color: var(--color-${(props) => (props.active ? 'primary' : 'highlight')});
  color: var(--color-${(props) => (props.active ? 'background' : 'text')});
`;

const List = styled.ul`
  grid-area: list;
  column-width: 100%;
  column-gap: 2rem;

  @media (min-width: ${BREAKPOINTS.medium}) {
    column-width: 16rem;
  }
`;

const ListItem = styled.li<{ pending: boolean }>`
  display: inline-block;
  width: 100%;
  break-inside: avoid;
  margin-bottom: 1rem;
  border: 2px dashed;
  border-color: ${(props) => (props.pending ? 'var(--color-highlight)' : 'transparent')};
`;
