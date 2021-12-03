import { createGlobalStyle } from 'styled-components';

import { FONTS, LAYOUT, THEME, ZINDEX } from 'constants/css-variables';

import ResetStyle from './ResetStyle';
import TypographyStyle from './TypographyStyle';

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

  * {
    border: 1px dashed rgba(255, 255, 255, 0.1);
  }
`;

export default GlobalStyle;
