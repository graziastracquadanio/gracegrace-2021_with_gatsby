import React from 'react';

import { Code } from './Code';
import { Heart } from './Heart';

// https://www.svgrepo.com/
export const icons: { [key: string]: React.FC<any> } = {
  code: Code,
  heart: Heart,
};
