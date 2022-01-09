import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

import { Tag } from 'components/Tag';
import { BREAKPOINTS } from 'constants/css-variables';
import { Recipe } from 'types/recipe';

const ingredientsRegex = /^\[(.*)\]$/g;

export const RecipeView: React.FC<Recipe> = ({ title, description, image, ingredients, instructions }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      {/* <Tags>
        <Tag>main course</Tag>
        <Tag>vegan</Tag>
      </Tags> */}

      {image && <Picture alt={title} src={image} />}

      <Description>
        <p>{description}</p>
      </Description>

      {ingredients && (
        <Ingredients>
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((ingredient) => (
              <Ingredient key={ingredient.slice(5)}>
                {ingredientsRegex.test(ingredient) ? (
                  <IngredientGroup>{ingredient.replace(/^\[|\]$/g, '')}</IngredientGroup>
                ) : (
                  ingredient
                )}
              </Ingredient>
            ))}
          </ul>
        </Ingredients>
      )}

      {instructions && (
        <Instructions>
          <h4>Instructions</h4>
          <InstructionsList>
            {instructions.map((instruction, i) => (
              <InstructionsListItem key={`instruction-${instruction.slice(5)}`}>
                {instruction.startsWith('TIP: ') ? (
                  <InstructionTip>
                    <p>{instruction}</p>
                  </InstructionTip>
                ) : (
                  <p>{instruction}</p>
                )}
              </InstructionsListItem>
            ))}
            <InstructionsListItem>
              <p>Enjoy it! ❤</p>
            </InstructionsListItem>
          </InstructionsList>
        </Instructions>
      )}

      <Footer>
        <Link to="edit">Edit recipe</Link>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-template-areas: 'header' 'tags' 'picture' 'description' 'ingredients' 'instructions' 'footer';

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 16rem auto 16rem;
    grid-row-gap: 1em;
    grid-column-gap: 2em;
    grid-template-areas:
      'header header picture'
      'description description picture'
      'tags tags picture'
      'ingredients instructions instructions'
      'footer footer footer';
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    grid-template-columns: 20rem auto 20rem;
  }
`;

const Header = styled.header`
  grid-area: header;
`;

const Title = styled.h3``;

const Description = styled.section`
  grid-area: description;
`;

const Tags = styled.div`
  grid-area: tags;
  display: flex;
  align-items: flex-start;
  gap: 1em;
`;

const Picture = styled.img`
  grid-area: picture;
`;

const Ingredients = styled.div`
  grid-area: ingredients;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Ingredient = styled.li`
  font-family: var(--font-primary);
  padding: 0.5em 0;
  border-bottom: 1px dashed var(--color-gray);
  b {
    text-decoration: underline;
  }
`;

const IngredientGroup = styled.h6`
  text-transform: capitalize;
  margin-top: 1rem;
`;

const Instructions = styled.div`
  grid-area: instructions;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const InstructionsList = styled.ul`
  background-color: var(--color-smooth);
  transition: background var(--theme-transition);
`;

const InstructionsListItem = styled.li`
  padding: 0.5em;
  transition: background var(--theme-transition);

  &:nth-last-child(odd) {
    background-color: var(--color-muted);
  }
`;

const InstructionTip = styled.div`
  padding: 0.5em;
  color: var(--color-primary);
  border: 1px dashed var(--color-primary);
  background-color: var(--color-background);
  transition: background var(--theme-transition);
`;

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
`;
