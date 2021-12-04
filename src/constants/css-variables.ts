// css variables are:
// - prefixed with the name of the group
// - kebab-case

export { COLORS } from './colors';

export const COLOR_HELPERS = {
  lighten: 'rgba(255, 255, 255, 0.25)',
  darken: 'rgba(0, 0, 0, 0.25)',
};

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

export const HEADINGS = {
  h1: 4,
  h2: 3.4,
  h3: 2.8,
  h4: 2.2,
  h5: 1.8,
  h6: 1.4,
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
  transition: '.04s ease-out',
};
