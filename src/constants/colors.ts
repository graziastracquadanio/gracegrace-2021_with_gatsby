export type Color = {
  light: string;
  dark: string;
};

export const COLORS: { [key: string]: Color } = {
  primary: {
    light: '#bf538d',
    dark: '',
  },
  secondary: {
    light: '',
    dark: '',
  },
  accent: {
    light: '',
    dark: '',
  },
  text: {
    light: 'deeppink',
    dark: 'green',
  },
  background: {
    light: '',
    dark: '',
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
