// css variables are:
// - prefixed with the name of the group
// - kebab-case

export { COLORS } from './colors';

// use min-width in the media queries
export const BREAKPOINTS = {
  // small: 0, // Small devices (<688px) DON'T USE THIS because it should be the default
  // Medium devices (tablets, 688px and up)
  medium: '688px', // 43em
  // Large devices (desktops, 992px and up)
  large: '992px', // 62em
  // Extra large devices (large desktops, 1312px and up)
  // extraLarge: '1312px', // 82em
  extraLarge: '1000px', // 82em
};

// prefix `--font-`
export const FONTS = {
  primary: 'Zilla Slab',
  secondary: 'Open Sans',
  baseFontSize: '14px',
  baseFontSizeM: '16px',
  baseFontSizeL: '18px',
};

// prefix `--layout-`
export const LAYOUT = {
  contentMaxWidth: '1024px',
  scrollbarWidth: '0.5rem',
};

// prefix `--zindex-` to avoid conflicts
export const ZINDEX = {
  progressBar: 1001,
  navigationMenu: 1000,
};

export const THEME = {
  transition: '.6s ease-out',
};
