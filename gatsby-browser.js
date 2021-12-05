import React from 'react';

import { AnimatePresence } from 'framer-motion';

import '@fontsource/open-sans';
import '@fontsource/zilla-slab';

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}
