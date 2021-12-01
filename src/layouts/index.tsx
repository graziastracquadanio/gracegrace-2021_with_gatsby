import React from 'react';

// import styled from 'styled-components';

import { GlobalStyle } from 'components/GlobalStyle';
import { Navigation } from 'components/Navigation';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <div>
    <GlobalStyle />
    <Navigation />
    this is going to be the main layout
    {children}
  </div>
);

export default MainLayout;
