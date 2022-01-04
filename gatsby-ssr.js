import React from 'react';

import Layout from './src/layouts';
import { FallbackStyles, MagicScriptTag } from './theme-utils';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(<FallbackStyles key="fallback-styles" />);
  setPreBodyComponents([<MagicScriptTag key="magic-script-tag" />]);
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
