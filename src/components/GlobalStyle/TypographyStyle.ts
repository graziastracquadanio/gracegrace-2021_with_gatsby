import { FONT } from '../../constants';
import { css } from 'styled-components';

const sizes = {
  h1: FONT.baseFontSize * 2.8,
  h2: FONT.baseFontSize * 2.4,
  h3: FONT.baseFontSize * 2,
  h4: FONT.baseFontSize * 1.6,
  h5: FONT.baseFontSize * 1.3,
  h6: FONT.baseFontSize * 1.1,
  p: FONT.baseFontSize * 1,
};

const createFontStyle = (fontSize: number, fontFamily: string = FONT.primary) => {
  return css`
    font-family: ${fontFamily};
    font-weight: 400;
    font-size: ${FONT.baseFontSize * fontSize}rem;
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
    ${createFontStyle(sizes.p, FONT.secondary)}
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
