export type Color = {
  light: string;
  dark: string;
};

// to use the color variables in css use the prefix `--color` (i.e. `--color-primary`)
// the colors are based on the theme selected through the ThemeContext
export const COLORS: { [key: string]: Color } = {
  primary: {
    light: '#bf538d',
    dark: 'hsl(260, 100%, 80%)',
  },
  secondary: {
    light: '',
    dark: 'hsl(290, 100%, 80%)',
  },
  accent: {
    light: '',
    dark: 'hsl(290, 100%, 80%)',
  },
  text: {
    light: 'rgba(0,0,0,.5)',
    dark: 'hsl(210, 50%, 96%)',
  },
  background: {
    light: '#f3f0f0',
    dark: 'hsl(230, 25%, 18%)',
  },
  muted: {
    light: '',
    dark: 'hsla(230, 20%, 0%, 20%)',
  },
  highlight: {
    light: '',
    dark: 'hsl(260, 20%, 40%)',
  },
  darken: {
    light: '',
    dark: 'rgba(0, 0, 0, 0.25)',
  },
  gray: {
    light: '',
    dark: 'hsl(210, 50%, 60%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
