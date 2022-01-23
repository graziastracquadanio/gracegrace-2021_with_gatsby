import React, { TextareaHTMLAttributes } from 'react';

import styled from 'styled-components';

import { CommonFormControlStyle } from './style';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea: React.FC<Props> = (props) => {
  return <StyledTextarea {...props} />;
};

const StyledTextarea = styled.textarea<Props>`
  ${CommonFormControlStyle}
  resize: vertical;
`;
