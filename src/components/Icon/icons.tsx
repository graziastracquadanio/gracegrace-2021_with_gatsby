import React from 'react';

import { Code, CodeProps } from './Code';

type Props = CodeProps;

// https://www.svgrepo.com/
export const icons: { [key: string]: React.FC<Props> } = {
  code: Code,
};
