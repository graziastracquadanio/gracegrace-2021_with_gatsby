import { createGlobalStyle } from 'styled-components';

import ResetStyle from './ResetStyle';
import TypographyStyle from './TypographyStyle';
import { FONTS, LAYOUT, THEME, ZINDEX } from 'constants/css-variables';

const GlobalStyle = createGlobalStyle`
  // variables (except colors which are dynamically updated in the ThemeContext)
  :root {
    // EXTRA COLORS
    --color-success: #C8E6C9;
    --color-info: #B3E5FC;
    --color-danger: #F8BBD0;

    // FONTS
    --font-primary: ${FONTS.primary};
    --font-secondary: ${FONTS.secondary};
    --font-base-font-size: ${FONTS.baseFontSize};
    --font-base-font-size-m: ${FONTS.baseFontSizeM};
    --font-base-font-size-l: ${FONTS.baseFontSizeL};
    --font-weight-primary: ${FONTS.weightPrimary};
    --font-weight-normal: ${FONTS.weightNormal};
    --font-weight-bold: ${FONTS.weightBold};

    // LAYOUT
    --layout-content-max-width: ${LAYOUT.contentMaxWidth};

    // THEME
    --theme-transition: ${THEME.transition};
  }

  ${ResetStyle}
  ${TypographyStyle}

  body {
    border: 8px solid var(--color-primary);
  }

  ::-moz-selection {
    background: var(--color-highlight);
  }

  ::selection {
    background: var(--color-highlight);
  }

  ::placeholder {
    color: var(--color-gray);
    font-weight: var(--font-weight-normal);
  }
`;

export default GlobalStyle;
