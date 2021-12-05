import React from 'react';

// import { motion } from 'framer-motion';
import { PageProps } from 'gatsby';
import styled from 'styled-components';

import { GlobalStyle } from 'components/GlobalStyle';
import { Navigation } from 'components/Navigation';
import { BREAKPOINTS } from 'constants/css-variables';
import { ThemeProvider } from 'contexts/ThemeContext';

const MainLayout: React.FC<PageProps> = ({ children, path }) => (
  <ThemeProvider>
    <GlobalStyle />

    <LayoutContainer>
      <ContentLimiterContainer>
        <Navigation />
        {path}

        {/* <motion.div
          key={path}
          initial={{ opacity: 0, y: '0px', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: '-0px', scale: 0.95 }}
          transition={{
            type: 'spring',
            mass: 0.35,
            stiffness: 75,
            duration: 0.3,
          }}
        > */}
        {children}
        {/* </motion.div> */}
      </ContentLimiterContainer>
    </LayoutContainer>
  </ThemeProvider>
);

const LayoutContainer = styled.div`
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

const ContentLimiterContainer = styled.div`
  width: 100%;
  max-width: var(--layout-content-max-width);
  display: grid;
  grid-template-columns: 100%;
  row-gap: 2em;
`;

export default MainLayout;
