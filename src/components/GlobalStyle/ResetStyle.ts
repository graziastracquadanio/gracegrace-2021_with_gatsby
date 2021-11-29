import { css } from 'styled-components';

const ResetStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-weight: inherit;
  }
  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  [tabindex='-1']:focus {
    outline: 0 !important;
  }
  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  table {
    border-collapse: collapse;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  a,
  button {
    cursor: pointer;
  }
`;

export default ResetStyle;
