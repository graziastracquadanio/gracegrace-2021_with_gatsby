import React from 'react';

import { PageProps } from 'gatsby';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { GlobalStyle } from 'components/GlobalStyle';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { Navigation } from 'components/Navigation';
import { BREAKPOINTS } from 'constants/css-variables';

// import { motion } from 'framer-motion';

const MainLayout: React.FC<PageProps> = ({ children, path }) => (
  <>
    <GlobalStyle />

    <LoadingIndicator />

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
      <Footer>
        <p>
          <small>
            This website has been made with <span>&hearts;</span> a lot of it!
          </small>
        </p>
      </Footer>
    </LayoutContainer>
  </>
);

const LayoutContainer = styled.div`
  width: 100%;
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-bottom: 4em;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0.25em;
`;

export default observer(MainLayout);
