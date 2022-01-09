import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

import { TextLink } from 'components/TextLink';
import { Recipe } from 'types/recipe';

export const RecipesListItem: React.FC<Recipe> = ({ id, title, thumb }) => {
  return (
    <StyledLink to={`/recipes/${id}`}>
      <div>
        <Thumb alt={title} src={thumb || 'assets/fallback.png'} isFallback={!thumb} />
      </div>
      <Title>
        <TextLink to={`/recipes/${id}`}>{title}</TextLink>
      </Title>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const Thumb = styled.img<{ isFallback: boolean }>`
  width: 5rem;
  height: 5rem;
  padding: ${(props) => (props.isFallback ? '0.75rem' : 0)};
  opacity: ${(props) => (props.isFallback ? 0.7 : 1)};
  background-color: var(--color-gray);
`;

const Title = styled.p`
  /* font-family: var(--font-primary); */
  text-decoration: none;
  line-height: 1.2;

  color: var(--color-text);
`;

// https://www.flaticon.com/free-icon/dinner_5662776?term=plate%20heart&page=2&position=59&page=2&position=59&related_id=5662776&origin=search
