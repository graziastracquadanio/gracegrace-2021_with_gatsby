import React from 'react';

// import styled from 'styled-components';

import { GlobalStyle } from 'components/GlobalStyle';
import { Navigation } from 'components/Navigation';
import { ThemeProvider } from 'contexts/ThemeContext';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <ThemeProvider>
    <GlobalStyle />
    <Navigation />
    this is going to be the main layout
    {children}
  </ThemeProvider>
);

export default MainLayout;
