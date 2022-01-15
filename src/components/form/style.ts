import { css } from 'styled-components';

export const CommonFormControlStyle = css`
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray);
  border-radius: 0;
  outline: none;
  width: 100%;
  font-family: var(--fonts-secondary);
  font-weight: 300;
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.5;
  background-color: var(--color-background-light);
  transition: all var(--theme-transition);

  &:focus {
    border-color: var(--color-primary);
  }
`;
