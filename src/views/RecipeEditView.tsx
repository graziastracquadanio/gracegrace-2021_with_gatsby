import React, { useEffect, useMemo, useState } from 'react';

import { useFormik } from 'formik';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import { Button } from 'components/Button';
import { Checkbox, DraggableList, Input, Textarea } from 'components/form';
import { BREAKPOINTS } from 'constants/css-variables';
import { useThemeContext } from 'contexts/ThemeContext';
import { Recipe } from 'types/recipe';
import { useFormikArray } from 'utils/formik';

interface Props {
  recipe?: Recipe | null;
  saveRecipe: (data: Recipe) => Promise<string | null>;
  deleteRecipe: (id: string) => Promise<void>;
}

export const RecipeEditView: React.FC<Props> = ({ recipe, saveRecipe, deleteRecipe }) => {
  const { colorMode } = useThemeContext();
  const [ingredientsString, setIngredientsString] = useState('');
  const [details, setDetails] = useState<Pick<Recipe, 'createdAt' | 'lastEdit'> | undefined>();

  const initialValues = useMemo(
    () => ({
      id: '',
      title: '',
      description: '',
      imageName: '',
      ingredients: [],
      instructions: [''],
      published: false,
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
        setIngredientsString(`- ${recipe.ingredients.join('\n- ')}`);
      }
      const { createdAt, lastEdit } = recipe;
      setDetails({
        createdAt,
        lastEdit,
      });
    }
  }, [recipe, setValues, setIngredientsString, setDetails]);

  const { add: addInstruction, remove: removeInstruction } = useFormikArray(formikProps, 'instructions');

  const onDelete = async () => {
    if (window.confirm('Are you sure you want to delete this recipe?') === true) {
      const { id } = formikProps.values;
      if (id) {
        await deleteRecipe(id);
      }
      navigate('/recipes');
    }
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
      {formikProps.values.published}
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
      <Details colorMode={colorMode}>
        <Checkbox
          id="published"
          name="published"
          type="checkbox"
          checked={formikProps.values.published}
          onChange={formikProps.handleChange}
          label="published"
        />
        <div>
          {formikProps.values.id && <p>id: {formikProps.values.id}</p>}
          {details?.createdAt && <p>Created: {new Date(details.createdAt).toLocaleString()}</p>}
          {details?.lastEdit && <p>Last edit: {new Date(details.lastEdit).toLocaleString()}</p>}
        </div>
      </Details>
      <Picture>
        <FormControl>
          <Label htmlFor="image-name">Image name</Label>
          <Input
            id="image-name"
            name="imageName"
            value={formikProps.values.imageName}
            onChange={formikProps.handleChange}
            placeholder="Name of the picture"
          />
        </FormControl>
      </Picture>
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
        <Button onClick={onDelete} variant="gray" size="medium">
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
  grid-template-areas: 'header' 'picture' 'description' 'ingredients' 'instructions' 'details' 'footer';

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 16rem auto 16rem;
    grid-row-gap: 1em;
    grid-column-gap: 2em;
    grid-template-areas:
      'header header details'
      'picture picture details'
      'description description description'
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

const Details = styled.div<{ colorMode: string }>`
  grid-area: details;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  height: 100%;
  background-color: var(--color-${(props) => (props.colorMode === 'light' ? 'gray-light' : 'muted')});
  padding: 2rem;
`;

const Picture = styled.div`
  grid-area: picture;
`;

const Instructions = styled.div`
  grid-area: instructions;
`;

const Footer = styled.div`
  grid-area: footer;
  padding: 0.5rem;
  width: 100%;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
    transition: background var(--theme-transition);
    opacity: 0.8;
    z-index: -1;
  }
`;

const Tip = styled.span`
  font-size: small;
  opacity: 0.8;
`;