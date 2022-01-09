import React from 'react';

import { App } from './src/app';
import { FallbackStyles, MagicScriptTag } from './theme-utils';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(<FallbackStyles key="fallback-styles" />);
  setPreBodyComponents([<MagicScriptTag key="magic-script-tag" />]);
};

export const wrapPageElement = ({ element }) => <App>{element}</App>;
