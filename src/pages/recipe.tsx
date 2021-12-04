import React from 'react';

import styled from 'styled-components';

import { Tag } from 'components/Tag';
import { BREAKPOINTS } from 'constants/css-variables';

const RecipePage: React.FC = () => {
  return (
    <Container>
      <Title>Couscous with veggies</Title>
      <Tags>
        <Tag>main course</Tag>
        <Tag>vegan</Tag>
      </Tags>

      <Picture alt="some title" src="http://gracegrace.me/wp_admin/wp-content/uploads/2017/10/veggie-couscous.jpg" />

      <Ingredients>
        <h4>Ingredients</h4>
        <ul>
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
        </InstructionsList>
      </Instructions>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-areas:
    'title'
    'tags'
    'picture'
    'ingredients'
    'instructions';

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 14rem auto;
    grid-template-areas:
      'title title'
      'tags tags'
      'picture picture'
      'ingredients instructions';
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    grid-template-columns: 20rem auto;
  }
`;

const Title = styled.h3`
  grid-area: title;
`;

const Tags = styled.section`
  grid-area: tags;
  display: flex;
  gap: 1em;
`;

const Picture = styled.img`
  grid-area: picture;
`;

const Ingredients = styled.div`
  grid-area: ingredients;
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

export default RecipePage;
