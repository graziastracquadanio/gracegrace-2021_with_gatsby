import React from 'react';

import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { IngredientsListCss } from './recipe/style';

interface Props {
  ingredients: string;
}

export const IngredientsViewer: React.FC<Props> = ({ ingredients }) => {
  return <IngredientsList>{ingredients}</IngredientsList>;
};

const IngredientsList = styled(ReactMarkdown)`
  ${IngredientsListCss}
`;
