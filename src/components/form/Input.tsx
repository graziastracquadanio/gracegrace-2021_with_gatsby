import React, { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import { CommonFormControlStyle } from './style';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  ${CommonFormControlStyle}
`;
