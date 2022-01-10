import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

import { TextLink } from 'components/TextLink';
import { Recipe } from 'types/recipe';

export const RecipesListItem: React.FC<Recipe> = ({ id, title, thumb }) => (
  <Container>
    <ThumbContainer to={`/recipes/${id}`}>
      <Thumb alt={title} src={thumb || '/assets/fallback.png'} loading="lazy" />
    </ThumbContainer>
    <Title>
      <TextLink to={`/recipes/${id}`}>{title}</TextLink>
    </Title>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const ThumbContainer = styled(Link)`
  width: 5rem;
  height: 5rem;
  background-color: var(--color-gray-light);
  background-image: url('/assets/fallback.png');
  background-size: contain;
`;

const Thumb = styled.img`
  display: block;
  width: 100%;
`;

const Title = styled.h6`
  flex: 1;
  font-family: var(--font-primary);
  text-decoration: none;
  line-height: 1.2;
  color: var(--color-text);
`;

// https://www.flaticon.com/free-icon/dinner_5662776?term=plate%20heart&page=2&position=59&page=2&position=59&related_id=5662776&origin=search
