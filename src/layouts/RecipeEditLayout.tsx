import React, { useEffect, useMemo } from 'react';

import { useFormik } from 'formik';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import { Button } from 'components/Button';
import { DraggableList, Input, Textarea } from 'components/form';
import { BREAKPOINTS } from 'constants/css-variables';
import { Recipe } from 'types/recipe';
import { useFormikArray } from 'utils/formik';

interface Props {
  recipe?: Recipe | null;
  saveRecipe: (data: Recipe) => Promise<string | null>;
}

export const RecipeEditLayout: React.FC<Props> = ({ recipe, saveRecipe }) => {
  const initialValues = useMemo(
    () => ({
      id: '',
      title: '',
      description: '',
      ingredients: [],
      instructions: [],
    }),
    [],
  );

  const formikProps = useFormik<Recipe>({
    initialValues,
    onSubmit: () => {},
  });

  const { setValues } = formikProps;

  useEffect(() => {
    if (recipe) {
      setValues(recipe);
    }
  }, [recipe, setValues]);

  const { add: addIngredient, remove: removeIngredient } = useFormikArray(formikProps, 'ingredients');
  const { add: addInstruction, remove: removeInstruction } = useFormikArray(formikProps, 'instructions');

  const onSave = async () => {
    if (formikProps.values) {
      const id = await saveRecipe(formikProps.values);
      if (id) {
        navigate(`/recipes/${id}`);
      }
    }
  };

  return (
    <Container>
      <Header>
        <FormControl>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" value={formikProps.values.title} onChange={formikProps.handleChange} />
        </FormControl>
      </Header>
      <Description>
        <FormControl>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formikProps.values.description}
            rows={2}
            onChange={formikProps.handleChange}
          />
        </FormControl>
      </Description>
      <Ingredients>
        <FormControl>
          <Label htmlFor="ingredients">Ingredients</Label>
          <DraggableList
            name="ingredients"
            values={formikProps.values.ingredients}
            handleChange={formikProps.handleChange}
            onAddItem={addIngredient}
            onRemoveItem={removeIngredient}
          />
        </FormControl>
      </Ingredients>

      <Instructions>
        <FormControl>
          <Label htmlFor="instructions">Instructions</Label>
          <DraggableList
            name="instructions"
            values={formikProps.values.instructions}
            rows={3}
            handleChange={formikProps.handleChange}
            onAddItem={addInstruction}
            onRemoveItem={removeInstruction}
          />
        </FormControl>
      </Instructions>

      <Footer>
        <SaveButton onClick={onSave}>Save recipe</SaveButton>
      </Footer>
    </Container>
  );
};

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1.2rem;
`;

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

const Description = styled.section`
  grid-area: description;
`;

const Ingredients = styled.div`
  grid-area: ingredients;
`;

const Instructions = styled.div`
  grid-area: instructions;
`;

const Footer = styled.div`
  grid-area: footer;
  padding: 0.5rem;
  background-color: var(--color-background);
  width: 100%;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const SaveButton = styled(Button)`
  background-color: var(--color-primary);
  font-size: 1rem;

  &:hover {
    background-color: var(--color-primary);
  }
`;
