import React, { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

// interface Props extends InputHTMLAttributes<HTMLInputElement> {
// }

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--color-gray);
  border-radius: 0;
  outline: none;

  &:focus {
    border-color: var(--color-primary);
  }
`;
