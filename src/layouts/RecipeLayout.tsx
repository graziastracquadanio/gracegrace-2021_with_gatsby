import React from 'react';

import styled from 'styled-components';

import { Tag } from 'components/Tag';
import { BREAKPOINTS } from 'constants/css-variables';
import { Recipe } from 'types/recipe';

const RecipeLayout: React.FC<Recipe> = ({ title, description }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Tags>
          <Tag>main course</Tag>
          <Tag>vegan</Tag>
        </Tags>
      </Header>

      <Description>
        <p>{description}</p>
      </Description>

      <Picture alt="some title" src="https://gracegrace.me/wp_admin/wp-content/uploads/2017/10/veggie-couscous.jpg" />

      <Ingredients>
        <h4>Ingredients</h4>
        <ul>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
          <Ingredient>
            100 gr <b>couscous</b> wholemeal is healthier
          </Ingredient>
        </ul>
      </Ingredients>

      <Instructions>
        <h4>Instructions</h4>
        <InstructionsList>
          <InstructionsListItem>
            <p>Cover the couscous with hot boiling water and leave apart.</p>
          </InstructionsListItem>
          <InstructionsListItem>
            <p>
              In a blender put together dressing ingredients so add the peeled garlic cloves, the 2 tbsp of tahini paste
              (also known as sesame seeds paste), the 4 tbsp of tamari (or soy sauce) and the orange juice. Blend for
              some seconds at high speed.
            </p>
          </InstructionsListItem>
          <InstructionsListItem>
            <p>Cut the scallions and the chili in small pieces.</p>
          </InstructionsListItem>
          <InstructionsListItem>
            <p>
              Heat the pan and add a couple of tbsp of dressing and the chopped scallions and chili. Cook and mix at
              high heat. You can add some more dressing.
            </p>
          </InstructionsListItem>
          <InstructionsListItem>
            <p>
              Add the chopped mushrooms and stir-fry. If you feel like it is turning dry add some orange juice and
              dressing. The mushrooms will absorb it and get a fabInstructionsListous flavor!
            </p>
          </InstructionsListItem>
          <InstructionsListItem>
            <p>Enjoy it! ❤</p>
          </InstructionsListItem>
        </InstructionsList>
      </Instructions>
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

export default RecipeLayout;
