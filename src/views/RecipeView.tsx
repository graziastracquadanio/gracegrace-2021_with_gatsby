import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { IngredientsViewer } from 'components/IngredientsViewer';
import { Tag } from 'components/Tag';
import { BREAKPOINTS } from 'constants/css-variables';
import { useRootStore } from 'contexts/RootStoreContext';
import { Recipe } from 'types/recipe';
import { Tag as TagType } from 'types/tag';

export const RecipeView: React.FC<Recipe> = ({
  title,
  description,
  cover,
  ingredients,
  instructions,
  tags: tagIds,
}) => {
  const { tagsStore } = useRootStore();
  const [tags, setTags] = useState<TagType[] | null | undefined>();

  useEffect(() => {
    if (tagIds) {
      setTags(tagsStore.getTags(tagIds));
    }
  }, [tagIds, tagsStore, setTags]);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>

      {cover && <Picture alt={title} src={cover} />}

      <Description>
        <p>{description}</p>
      </Description>

      {tags && (
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </Tags>
      )}

      {ingredients && (
        <Ingredients>
          <h4>Ingredients</h4>
          <IngredientsViewer ingredients={ingredients} />
        </Ingredients>
      )}

      {instructions && (
        <Instructions>
          <h4>Instructions</h4>
          <ul>
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
          </ul>
        </Instructions>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-template-areas: 'header' 'tags' 'picture' 'description' 'ingredients' 'instructions' 'footer';

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 16rem auto 16rem;
    grid-template-rows: [row1-start] auto [row1-end row2-start] minmax(1rem, 1fr) [row2-end row3-start] auto [row3-end];
    grid-row-gap: 1em;
    grid-column-gap: 2em;
    grid-template-areas:
      'header header picture'
      'tags tags picture'
      'description description picture'
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

const Tags = styled.section`
  grid-area: tags;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
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

const Instructions = styled.div`
  grid-area: instructions;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const InstructionsListItem = styled.li`
  padding: 0.5em;
  transition: background var(--theme-transition);

  &:nth-last-child(even) {
    background-color: var(--color-background-dark);
  }
`;

const InstructionTip = styled.div`
  padding: 0.5em;
  color: var(--color-primary);
  border: 1px dashed var(--color-primary);
  background-color: var(--color-background);
  transition: background var(--theme-transition);
`;
