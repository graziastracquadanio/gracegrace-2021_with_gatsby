import { css } from 'styled-components';

import { BREAKPOINTS, HEADINGS } from 'constants/css-variables';

const sizes = {
  ...HEADINGS,
  p: 1,
};

const TypographyStyle = css`
  body {
    font-size: var(--font-base-font-size);
    color: var(--color-text);

    @media (min-width: ${BREAKPOINTS.medium}) {
      font-size: var(--font-base-font-size-m);
    }

    @media (min-width: ${BREAKPOINTS.large}) {
      font-size: var(--font-base-font-size-l);
    }
  }

  // prettier-ignore
  h1, h2, h3, h4, h5, h6 {
    display: block;
    margin: 0;
    line-height: 1.2;
    font-family: var(--font-primary);
    font-weight: 400;
    line-height: 1.5;
    color: var(--color-text);
    transition: color var(--theme-transition);
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

  p {
    font-family: var(--fonts-secondary);
    font-weight: 400;
    font-size: ${sizes.p}em;
    color: var(--color-text);
    transition: color var(--theme-transition);
    line-height: 1.5;
    margin: 0;
    margin-bottom: 0.5em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  b,
  strong {
    font-weight: bolder; // Add the correct font weight in Chrome, Edge, and Safari
  }
`;

export default TypographyStyle;