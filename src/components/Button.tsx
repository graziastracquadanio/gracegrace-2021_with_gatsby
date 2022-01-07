import React, { HTMLAttributes } from 'react';

import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export const Button: React.FC<Props> = ({ children, variant, ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button<{ variant?: string }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3rem;
  color: var(--color-background);
  background-color: var(--color-text);
  transition: background var(--theme-transition);
  opacity: 0.8;

  &:hover {
    background-color: var(--color-${(props) => (props.variant ? props.variant : 'secondary')});
    opacity: 1;
  }
`;
