import React from 'react';

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
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
  border: none;
  border-radius: 3rem;
  color: var(--color-background);
  background-color: var(--color-${(props) => (props.variant ? props.variant : 'primary')});
  transition: background var(--theme-transition);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3rem;
    box-shadow: var(--color-${(props) => (props.variant ? props.variant : 'primary')}) 0px 0px 0px 2px;
    transition: all 0.1s ease-out;
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;
