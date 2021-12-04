import React from 'react';

// import Terser from 'terser';

import { COLOR_MODE_KEY, COLORS, INITIAL_COLOR_MODE_CSS_PROP } from './src/constants/colors';
import Layout from './src/layouts';

function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach((color) => {
    const [name, colorByTheme] = color;
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const MagicScriptTag = () => {
  // Replace that rainbow string with our COLORS object.
  // We need to stringify it as JSON so that it isn't
  // inserted as [object Object].
  const functionString = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  // Wrap it in an IIFE
  const codeToRunOnClient = `(${functionString})()`;

  // Inject it
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce((acc, [name, colorByTheme]) => {
    return `${acc}\n--color-${name}: ${colorByTheme.light};`;
  }, '');

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(<FallbackStyles key="fallback-styles" />);
  setPreBodyComponents([<MagicScriptTag key="magic-script-tag" />]);
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
