import React from 'react';

import styled from 'styled-components';

import { GlobalStyle } from 'components/GlobalStyle';
import { Navigation } from 'components/Navigation';
import { BREAKPOINTS } from 'constants/css-variables';
import { ThemeProvider } from 'contexts/ThemeContext';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <ThemeProvider>
    <GlobalStyle />

    <MainContainer>
      <ContentContainer>
        <Navigation />

        {children}
      </ContentContainer>
    </MainContainer>
  </ThemeProvider>
);

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background);
  transition: background var(--theme-transition);

  padding: 0 1em;

  @media (min-width: ${BREAKPOINTS.medium}) {
    padding: 0 1.5em;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: var(--layout-content-max-width);
  display: grid;
  grid-template-columns: 100%;
  row-gap: 2em;
`;

export default MainLayout;
