import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { IngredientsListCss } from 'components/recipe';
import { Tag } from 'components/Tag';
import { BREAKPOINTS } from 'constants/css-variables';
import { useRootStore } from 'contexts/RootStoreContext';
import { useThemeContext } from 'contexts/ThemeContext';
import { Recipe } from 'types/recipe';
import { Tag as TagType } from 'types/tag';

// const ingredientsRegex = /^\[(.*)\]$/g;

export const RecipeView: React.FC<Recipe> = ({
  title,
  description,
  cover,
  ingredients,
  instructions,
  tags: tagIds,
}) => {
  const { colorMode } = useThemeContext();
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
            <Tag key={tag.id} tag={tag} linkTo={`/ingredients/${tag.id}`} />
          ))}
        </Tags>
      )}

      {ingredients && (
        <Ingredients>
          <h4>Ingredients</h4>
          <IngredientsList>{ingredients}</IngredientsList>
        </Ingredients>
      )}

      {instructions && (
        <Instructions>
          <h4>Instructions</h4>
          <InstructionsList colorMode={colorMode}>
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

const Tags = styled.section`
  grid-area: tags;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
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

const IngredientsList = styled(ReactMarkdown)`
  ${IngredientsListCss}
`;

const Instructions = styled.div`
  grid-area: instructions;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const InstructionsList = styled.ul<{ colorMode?: string | null }>`
  background-color: ${(props) => (props.colorMode === 'light' ? 'var(--color-gray-light);' : 'transparent')};
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
