import React, { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import { CommonFormControlStyle } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input: React.FC<Props> = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input<Props>`
  ${CommonFormControlStyle}
`;
