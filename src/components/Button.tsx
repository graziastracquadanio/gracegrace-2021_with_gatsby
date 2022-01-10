import React, { HTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

type Size = 'small' | 'medium' | undefined;

interface Props extends React.ComponentPropsWithoutRef<'button'> {
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
  background-color: var(--color-${(props) => (props.variant ? props.variant : 'primary')});
  transition: background var(--theme-transition);

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
