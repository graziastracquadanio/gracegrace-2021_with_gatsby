import { css } from 'styled-components';

import { BREAKPOINTS } from 'constants/breakpoints';
import { FONTS } from 'constants/fonts';

const sizes = {
  h1: 3,
  h2: 2.8,
  h3: 2.4,
  h4: 2,
  h5: 1.6,
  h6: 1.3,
  p: 1,
};

const createFontStyle = (fontSize: number, fontFamily: string = FONTS.primary) => {
  return css`
    font-family: ${fontFamily};
    font-weight: 400;
    font-size: ${fontSize}rem;
    color: var(--color-text);

    @media (max-width: ${BREAKPOINTS.mobile - 1}px) {
      font-size: ${fontSize * 0.8}rem;
    }
  `;
};

const TypographyStyle = css`
  // prettier-ignore
  h1, h2, h3, h4, h5, h6, p {
    display: block;
    margin: 0;
    line-height: 1.2;
  }

  h1 {
    ${createFontStyle(sizes.h1)}
  }

  h2 {
    ${createFontStyle(sizes.h2)}
  }

  h3 {
    ${createFontStyle(sizes.h3)}
  }

  h4 {
    ${createFontStyle(sizes.h4)}
  }

  h5 {
    ${createFontStyle(sizes.h5)}
  }

  h6 {
    ${createFontStyle(sizes.h6)}
  }

  p {
    ${createFontStyle(sizes.p, FONTS.secondary)}
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
