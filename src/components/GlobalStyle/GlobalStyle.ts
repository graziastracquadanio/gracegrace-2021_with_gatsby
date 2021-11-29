import { createGlobalStyle } from 'styled-components';
import ResetStyle from './ResetStyle';
import TypographyStyle from './TypographyStyle';

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  ${TypographyStyle}
`;

export default GlobalStyle;
