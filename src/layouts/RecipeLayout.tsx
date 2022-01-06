import React from 'react';

import styled from 'styled-components';

import { Tag } from 'components/Tag';
import { BREAKPOINTS } from 'constants/css-variables';
import { Recipe } from 'types/recipe';

const RecipeLayout: React.FC<Recipe> = ({ title, description, image, ingredients, instructions, ...recipe }) => {
  console.log(image);
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {/* <Tags>
          <Tag>main course</Tag>
          <Tag>vegan</Tag>
        </Tags> */}
      </Header>

      <Description>
        <p>{description}</p>
      </Description>

      <Picture alt={title} src={image} />

      {ingredients && (
        <Ingredients>
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((ingredient) => (
              <Ingredient key={ingredient.slice(5)}>{ingredient}</Ingredient>
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
            <InstructionsListItem>Enjoy it! ❤</InstructionsListItem>
          </InstructionsList>
        </Instructions>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-template-areas: 'header' 'picture' 'description' 'ingredients' 'instructions';

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 16rem auto;
    grid-row-gap: 1em;
    grid-column-gap: 2em;
    grid-template-areas:
      'picture header'
      'picture description'
      'empty-space empty-space'
      'empty-space empty-space'
      'empty-space empty-space'
      'ingredients instructions';
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    grid-template-columns: 20rem auto;
  }
`;

const Header = styled.header`
  grid-area: header;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
`;

const Description = styled.section`
  grid-area: description;
`;

const Tags = styled.div`
  grid-area: tags;
  display: flex;
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
  color: var(--color-secondary);
  border: 1px dashed var(--color-secondary);
  background-color: var(--color-background);
  transition: background var(--theme-transition);
`;

export default RecipeLayout;
