import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { COLOR_MODE_KEY, Color, COLORS, INITIAL_COLOR_MODE_CSS_PROP } from 'constants/colors';

export type ThemeProps = {
  colorMode: string | null | undefined;
  setColorMode: (newValue: keyof Color) => void;
};

export const ThemeContext = React.createContext({} as ThemeProps);

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP);

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue: keyof Color) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;
        if (colorByTheme[newValue]) {
          root.style.setProperty(cssVarName, colorByTheme[newValue]);
        } else {
          root.style.removeProperty(cssVarName);
        }
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={{ colorMode }}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
