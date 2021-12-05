export type Color = {
  light: string;
  dark: string | null;
};

// to use the color variables in css use the prefix `--color` (i.e. `--color-primary`)
// the colors are based on the theme selected through the ThemeContext
// https://flatuicolors.com/palette/in
export const COLORS: { [key: string]: Color } = {
  primary: {
    light: 'rgba(179, 55, 113, 1.0)',
    dark: 'hsl(260, 100%, 80%)',
  },
  secondary: {
    light: 'rgba(130, 88, 159, 1.0)',
    dark: 'hsl(290, 100%, 80%)',
  },
  accent: {
    light: 'rgba(255, 202, 40, 1.0)',
    dark: 'rgba(154, 236, 219,1.0)',
  },
  smooth: {
    light: '#dcedc8',
    dark: null, // deliberately left empty, use a fallback for specific cases
  },
  text: {
    // light: 'rgba(44, 58, 71, 1.0)',
    light: '#5a5c65',
    dark: 'hsl(210, 50%, 96%)',
  },
  background: {
    light: 'hsl(0, 11%, 95%)',
    dark: 'hsl(230, 25%, 18%)',
  },
  muted: {
    light: 'rgba(255, 255, 255, 0.4)',
    dark: 'hsla(230, 20%, 0%, 20%)',
  },
  highlight: {
    light: 'rgba(214, 162, 232, 0.6)',
    dark: 'hsl(260, 20%, 40%)',
  },
  gray: {
    light: 'rgba(209, 216, 224, 1.0)',
    dark: 'hsl(210, 50%, 60%)',
  },
  gray100: {
    light: 'rgba(223, 228, 234, 1.0)',
    dark: 'hsl(210, 50%, 30%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
