import React, { useEffect, useMemo, useState } from 'react';

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
  deleteRecipe: (id: string) => Promise<void>;
}

export const RecipeEditView: React.FC<Props> = ({ recipe, saveRecipe, deleteRecipe }) => {
  const [ingredientsString, setIngredientsString] = useState('');

  const initialValues = useMemo(
    () => ({
      id: '',
      title: '',
      description: '',
      ingredients: [],
      instructions: [''],
    }),
    [],
  );

  const formikProps = useFormik<Recipe>({
    initialValues,
    onSubmit: async (values) => {
      if (values) {
        const id = await saveRecipe(values);
        if (id) {
          navigate(`/recipes/${id}`);
        }
      }
    },
  });

  const { setValues } = formikProps;

  useEffect(() => {
    if (recipe) {
      setValues(recipe);
      if (recipe.ingredients) {
        console.log(`- ${recipe.ingredients.join('\n- ')}`);
        setIngredientsString(`- ${recipe.ingredients.join('\n- ')}`);
      }
    }
  }, [recipe, setValues, setIngredientsString]);

  const { add: addInstruction, remove: removeInstruction } = useFormikArray(formikProps, 'instructions');

  const onDelete = async () => {
    const { id } = formikProps.values;
    if (id) {
      await deleteRecipe(id);
    }
    navigate('/recipes');
  };

  const onChangeIngredients = (e: React.ChangeEvent<any>) => {
    const { value } = e.target;
    const ingredients = value
      .replace(/(\r\n|\n|\r)/gm, '')
      .split('- ')
      .filter((s: string) => s.length);
    formikProps.setFieldValue('ingredients', ingredients);
    setIngredientsString(value);
  };

  return (
    <Container>
      <Header>
        <FormControl>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formikProps.values.title}
            onChange={formikProps.handleChange}
            placeholder="How do we call the goodness?"
          />
        </FormControl>
      </Header>
      <Description>
        <FormControl>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formikProps.values.description}
            rows={4}
            onChange={formikProps.handleChange}
            placeholder="What is this recipe good for? Some notes about the benefits of some ingredients? Season notes?"
          />
        </FormControl>
      </Description>
      <Ingredients>
        <FormControl>
          <Label htmlFor="ingredients">Ingredients</Label>
          <Tip>
            Ingredients must be separated by new line and prefixed with <code>- </code>. <br />
            To specify a group use <code>- [group title]</code> for the name of the group
          </Tip>
          <Textarea
            rows={20}
            placeholder="Ingredients separated by new line"
            value={ingredientsString}
            onChange={onChangeIngredients}
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
            placeholder="Step to create magic here..."
          />
        </FormControl>
      </Instructions>

      <Footer>
        <Button onClick={formikProps.submitForm} variant="primary" size="medium">
          Save recipe
        </Button>
        <Button onClick={onDelete} variant="gray500" size="medium">
          Delete recipe
        </Button>
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
  gap: 2rem;
`;

const Tip = styled.span`
  font-size: small;
`;
