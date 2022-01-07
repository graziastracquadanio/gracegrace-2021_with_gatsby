import React, { TextareaHTMLAttributes } from 'react';

import styled from 'styled-components';

import { CommonFormControlStyle } from './style';

export const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <StyledTextarea {...props} />;
};

const StyledTextarea = styled.textarea`
  ${CommonFormControlStyle}
  resize: vertical;
`;
