import React from 'react';

import { INITIAL_COLOR_MODE_CSS_PROP } from 'constants/colors';

export const ThemeContext = React.createContext<string>(INITIAL_COLOR_MODE_CSS_PROP);
