import { createGlobalStyle } from 'styled-components';

import { FONTS } from '../../constants';
import ResetStyle from './ResetStyle';
import TypographyStyle from './TypographyStyle';

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  ${TypographyStyle}

  body {
    font-size: ${FONTS.baseFontSize};
  }
`;

export default GlobalStyle;
