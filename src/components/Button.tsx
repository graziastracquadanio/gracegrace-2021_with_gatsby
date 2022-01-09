import React, { HTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

type Size = 'small' | 'medium' | undefined;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: Size;
}

export const Button: React.FC<Props> = ({ children, variant, ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

const getCssBySize = (size: Size) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
      `;
    case 'medium':
    default:
      return css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
      `;
  }
};

const StyledButton = styled.button<Props>`
  ${(props) => getCssBySize(props.size)};

  border: none;
  border-radius: 3rem;
  color: var(--color-background);
  background-color: var(--color-${(props) => (props.variant ? props.variant : 'gray500')});
  transition: background var(--theme-transition);
  opacity: 0.8;

  &:hover {
    background-color: var(--color-${(props) => (props.variant ? props.variant : 'secondary')});
    opacity: 1;
  }
`;
