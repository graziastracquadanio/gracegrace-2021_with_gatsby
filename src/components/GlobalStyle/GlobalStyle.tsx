import { createGlobalStyle } from 'styled-components';

import ResetStyle from './ResetStyle';
import TypographyStyle from './TypographyStyle';
import { FONTS, LAYOUT, THEME, ZINDEX } from 'constants/css-variables';

const GlobalStyle = createGlobalStyle`
  // variables (except colors which are dynamically updated in the ThemeContext)
  :root {
    // FONTS
    --font-primary: ${FONTS.primary};
    --font-secondary: ${FONTS.secondary};
    --font-base-font-size: ${FONTS.baseFontSize};
    --font-base-font-size-m: ${FONTS.baseFontSizeM};
    --font-base-font-size-l: ${FONTS.baseFontSizeL};

    // LAYOUT
    --layout-content-max-width: ${LAYOUT.contentMaxWidth};

    // THEME
    --theme-transition: ${THEME.transition};

    // Z-INDEX
    --zindex-progress-bar: ${ZINDEX.progressBar};
    --zindex-navigation-menu: ${ZINDEX.navigationMenu};
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
`;

export default GlobalStyle;
