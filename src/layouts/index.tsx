import React from 'react';

// import styled from 'styled-components';

import Navigation from 'components/Navigation';
import GlobalStyle from 'components/GlobalStyle';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      this is going to be the main layout
      {children}
    </div>
  );
}
