export type Color = {
  light: string;
  dark: string | null;
};

export const PALETTE: { [key: string]: Color } = {
  // primary
  'primary-dark': {
    light: '#933969',
    dark: '#933969',
  },
  primary: {
    light: '#bf538d',
    dark: '#bf538d',
  },
  'primary-light': {
    light: '#e3bcd6',
    dark: '#e3bcd6',
  },
  // accent
  'accent-dark': {
    light: '#689f38',
    dark: '#689f38',
  },
  accent: {
    light: '#9ccc65',
    dark: '#9ccc65',
  },
  'accent-light': {
    light: '#dcedc8',
    dark: '#dcedc8',
  },
  // secondary
  'secondary-dark': {
    light: '#563A69',
    dark: '#563A69',
  },
  secondary: {
    light: '#82589F',
    dark: '#82589F',
  },
  'secondary-light': {
    light: '#C5B0D4',
    dark: '#C5B0D4',
  },
  // // accent
  // 'accent-dark': {
  //   light: '#ff8e01',
  //   dark: '#ff8e01',
  // },
  // accent: {
  //   light: '#ffca28',
  //   dark: '#ffca28',
  // },
  // 'accent-light': {
  //   light: '#ffecb3',
  //   dark: '#ffecb3',
  // },
  // gray
  'gray-dark': {
    light: '#5a5c65',
    dark: '#5a5c65',
  },
  gray: {
    light: '#A9ABB2',
    dark: '#A9ABB2',
  },
  'gray-light': {
    light: '#E9EAEC',
    dark: '#E9EAEC',
  },
};

export const COLORS: { [key: string]: Color } = {
  text: {
    light: PALETTE['gray-dark'].light,
    dark: PALETTE['gray-dark'].light,
  },
  background: {
    light: '#f4f1f1',
    dark: '#f4f1f1',
  },
  muted: {
    light: 'rgba(255, 250, 250, 0.4)',
    dark: 'rgba(255, 250, 250, 0.4)',
  },
  highlight: {
    light: PALETTE['primary-light'].light,
    dark: PALETTE['primary-light'].light,
  },
  smooth: {
    light: PALETTE['accent-light'].light,
    dark: PALETTE['accent-light'].light,
  },
};

// to use the color variables in css use the prefix `--color` (i.e. `--color-primary`)
// the colors are based on the theme selected through the ThemeContext
// https://flatuicolors.com/palette/in
// https://coolors.co/
// export const COLORS: { [key: string]: Color } = {
//   primary: {
//     light: 'rgba(179, 55, 113, 1.0)', // #b33771
//     dark: 'hsl(290, 100%, 80%)',
//   },
//   secondary: {
//     light: 'rgba(130, 88, 159, 1.0)', // #82589f
//     dark: 'hsl(260, 100%, 80%)',
//   },
//   accent: {
//     light: 'rgba(246, 185, 59, 1.0)', // F6B93B
//     dark: 'rgba(154, 236, 219,1.0)',
//   },
//   smooth: {
//     light: 'rgba(220, 237, 200, 0.5)',
//     dark: null, // deliberately left empty, use a fallback for specific cases
//   },
//   text: {
//     // light: 'rgba(44, 58, 71, 1.0)',
//     light: '#5a5c65',
//     dark: 'hsl(210, 50%, 96%)',
//   },
//   background: {
//     light: 'hsl(0, 11%, 95%)',
//     dark: 'hsl(230, 25%, 18%)',
//   },
//   muted: {
//     light: 'rgba(255, 250, 250, 0.4)',
//     dark: 'hsla(230, 20%, 0%, 20%)',
//   },
//   highlight: {
//     light: 'rgba(214, 162, 232, 0.6)',
//     dark: 'hsl(260, 20%, 40%)',
//   },
//   gray: {
//     light: 'rgba(209, 216, 224, 1.0)',
//     dark: 'hsl(210, 50%, 60%)',
//   },
//   // gray100: {
//   //   light: '#E9ECEF',
//   //   dark: '#C5CAE9',
//   // },
//   // gray200: {
//   //   light: '#CED4DA',
//   //   dark: '#7986CB',
//   // },
//   // gray300: {
//   //   light: '#6C757D',
//   //   dark: '#3F51B5',
//   // },
//   // gray400: {
//   //   light: '#343A40',
//   //   dark: '#303F9F',
//   // },
// };

export const COLORS_ALL = { ...PALETTE, ...COLORS };

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
