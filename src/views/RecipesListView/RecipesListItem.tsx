import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

import { TextLink } from 'components/TextLink';
import { Recipe } from 'types/recipe';

export const RecipesListItem: React.FC<Recipe> = ({ id, title, thumb }) => {
  return (
    <Container>
      <Link to={`/recipes/${id}`}>
        <Thumb alt={title} src={thumb || 'assets/fallback.png'} isFallback={!thumb} />
      </Link>
      <TextLink to={`/recipes/${id}`}>{title}</TextLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Thumb = styled.img<{ isFallback: boolean }>`
  width: 5rem;
  height: 5rem;
  padding: ${(props) => (props.isFallback ? '0.75rem' : 0)};
  opacity: ${(props) => (props.isFallback ? 0.7 : 1)};
  background-color: var(--color-gray100);
`;
