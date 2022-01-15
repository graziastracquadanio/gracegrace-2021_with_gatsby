import React, { useEffect, useState } from 'react';

import { Link, PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { useRootStore } from 'contexts/RootStoreContext';
import { Recipe } from 'types/recipe';
import { RecipeView } from 'views/RecipeView';

const RecipePage: React.FC<PageProps> = observer(function RecipePage({ params }) {
  const id = params.recipeId;
  const [recipe, saveRecipe] = useState<Recipe | null>(null);
  const {
    authStore,
    recipeStore: { getRecipe },
  } = useRootStore();

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipe(id);
      saveRecipe(data);
    };

    fetchRecipe();
  }, [id, getRecipe, saveRecipe]);

  if (recipe && recipe.id === id) {
    return (
      <>
        <RecipeView {...recipe} />
        {authStore.isLoggedIn && (
          <Footer>
            <Link to="edit">Edit recipe</Link>
          </Footer>
        )}
      </>
    );
  }
  return null;
});

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
`;

export default RecipePage;
