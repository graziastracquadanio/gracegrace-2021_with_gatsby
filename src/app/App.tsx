import React from 'react';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { GlobalStyle } from 'components/GlobalStyle';
import { Icon } from 'components/Icon';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { Navigation } from 'components/Navigation';
import { Notificator } from 'components/Notificator';
import { BREAKPOINTS } from 'constants/css-variables';
import { RootStoreProvider } from 'contexts/RootStoreContext';
import { ThemeProvider } from 'contexts/ThemeContext';

export const App: React.FC = ({ children }) => {
  const db = getFirestore();
  const storage = getStorage();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <RootStoreProvider db={db} storage={storage}>
          <LoadingIndicator />
          <LayoutContainer>
            <ContentLimiterContainer>
              <Navigation />
              <Notificator />

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
              This website has been made with{' '}
              <HeartButton to="/styleguide">
                <Heart icon="heart" />
              </HeartButton>{' '}
              a lot of it!
            </Footer>
          </LayoutContainer>
        </RootStoreProvider>
      </ThemeProvider>
    </>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background);
  transition: background var(--theme-transition);

  padding: 0 1.5em;

  @media (min-width: ${BREAKPOINTS.medium}) {
    padding: 0 3em;
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
  align-items: center;
  padding: 0.25em;
  font-size: small;
`;

const HeartButton = styled(Link)`
  position: relative;
  margin: 0 0.3rem;
`;

const Heart = styled(Icon)`
  height: 1.3rem;
  fill: var(--color-primary);
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.3);
  }
`;
