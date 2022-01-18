import { css } from 'styled-components';

import { BREAKPOINTS, HEADINGS } from 'constants/css-variables';

const sizes = {
  ...HEADINGS,
  p: 1,
};

const TypographyStyle = css`
  body {
    font-size: var(--font-base-font-size);
    font-weight: var(--font-weight-normal);
    line-height: 1.3;
    color: var(--color-text);

    @media (min-width: ${BREAKPOINTS.medium}) {
      font-size: var(--font-base-font-size-m);
    }

    @media (min-width: ${BREAKPOINTS.large}) {
      font-size: var(--font-base-font-size-l);
    }
  }

  p {
    font-family: var(--fonts-secondary);
    font-weight: var(--font-weight-normal);
    font-size: ${sizes.p}em;
    color: inherit;
    transition: color var(--theme-transition);
    line-height: 1.5;
    margin: 0;
    margin-bottom: 0.5em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  // prettier-ignore
  h1, h2, h3, h4, h5, h6 {
    display: block;
    margin: 0;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);
    line-height: 1;
    transition: color var(--theme-transition);
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: ${sizes.h1}em;
  }

  h2 {
    font-size: ${sizes.h2}em;
  }

  h3 {
    font-size: ${sizes.h3}em;
  }

  h4 {
    font-size: ${sizes.h4}em;
  }

  h5 {
    font-size: ${sizes.h5}em;
  }

  h6 {
    font-size: ${sizes.h6}em;
  }

  b,
  strong {
    font-weight: var(--font-weight-bold); // Add the correct font weight in Chrome, Edge, and Safari
  }

  mark {
    color: inherit;
    background-color: var(--color-highlight);
    transition: background var(--theme-transition);
  }

  code {
    padding: 0.1rem 0.25em;
    border-radius: 3px;
    background-color: var(--color-highlight);
    color: var(--color-text);
    transition: background var(--theme-transition);
  }
`;

export default TypographyStyle;
