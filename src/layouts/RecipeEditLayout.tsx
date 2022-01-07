import React, { useMemo } from 'react';

import { useFormik } from 'formik';
import styled from 'styled-components';

import { Input } from 'components/form';
import { Recipe } from 'types/recipe';

interface Props {
  recipe?: Recipe | null;
}

export const RecipeEditLayout: React.FC<Props> = ({ recipe }) => {
  const initialValues = useMemo(
    () => ({
      id: recipe?.id || '',
      title: recipe?.title,
    }),
    [],
  );

  const { values, handleChange, handleBlur } = useFormik<Recipe>({
    initialValues,
    onSubmit: () => {},
  });

  return (
    <EditorContainer>
      <Input name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
