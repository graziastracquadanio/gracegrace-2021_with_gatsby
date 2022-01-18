import React, { useEffect, useMemo, useState } from 'react';

import { useFormik } from 'formik';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import { TagsEditor } from './TagsEditor';
import { Button } from 'components/Button';
import { Checkbox, DraggableList, Input, Textarea } from 'components/form';
import { MarkdownEditor } from 'components/form/MarkdownEditor';
import { IngredientsListCss } from 'components/recipe';
import { BREAKPOINTS } from 'constants/css-variables';
import { Recipe } from 'types/recipe';
import { useFormikArray } from 'utils/formik';

interface Props {
  recipe?: Recipe | null;
  saveRecipe: (data: Recipe) => Promise<string | null>;
  deleteRecipe: (id: string) => Promise<void>;
}

export const RecipeEditView: React.FC<Props> = ({ recipe, saveRecipe, deleteRecipe }) => {
  const [details, setDetails] = useState<Pick<Recipe, 'createdAt' | 'lastEdit'> | undefined>();

  const initialValues = useMemo(
    () => ({
      id: '',
      title: '',
      description: '',
      imageName: '',
      ingredients: '',
      instructions: [''],
      published: false,
      tags: [],
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
      const { createdAt, lastEdit } = recipe;
      setDetails({
        createdAt,
        lastEdit,
      });
    }
  }, [recipe, setValues, setDetails]);

  const { add: addInstruction, remove: removeInstruction } = useFormikArray(formikProps, 'instructions');

  const onDelete = async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to delete this recipe?') === true) {
      const { id } = formikProps.values;
      if (id) {
        await deleteRecipe(id);
      }
      navigate('/recipes');
    }
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
      <Details>
        <div>
          <Checkbox
            id="published"
            name="published"
            type="checkbox"
            checked={formikProps.values.published}
            onChange={formikProps.handleChange}
            label="published"
          />
        </div>
        <div>
          {formikProps.values.id && (
            <p>
              id: <em>{formikProps.values.id}</em>
            </p>
          )}
          {details?.createdAt && (
            <p>
              Created: <em>{new Date(details.createdAt).toLocaleString()}</em>
            </p>
          )}
          {details?.lastEdit && (
            <p>
              Last edit: <em>{new Date(details.lastEdit).toLocaleString()}</em>
            </p>
          )}
        </div>
      </Details>
      <Tags>
        <TagsEditor
          initialSelection={recipe?.tags}
          onChange={(selection: string[]) => {
            formikProps.setFieldValue('tags', selection);
          }}
        />
      </Tags>
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
          <MarkdownEditor
            label={<Label htmlFor="ingredients">Ingredients</Label>}
            id="ingredients"
            value={formikProps.values.ingredients}
            onChange={formikProps.handleChange}
            customCSS={IngredientsListCss}
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
      'description description tags'
      'ingredients ingredients tags'
      'instructions instructions instructions'
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

const Details = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  background-color: var(--color-background-dark);
  padding: 2rem;
`;

const Tags = styled.div`
  grid-area: tags;
  background-color: var(--color-background-dark);
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
