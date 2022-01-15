import React from 'react';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import styled from 'styled-components';

import { GlobalStyle } from 'components/GlobalStyle';
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
              <HeartContainer>
                <Heart viewBox="0 0 297 297">
                  <path
                    d="M148.5,273.96c-1.572,0-3.145-0.36-4.589-1.083c-1.455-0.728-36.028-18.149-71.1-47.375
		c-20.824-17.353-37.475-35.289-49.488-53.31C7.847,148.979,0,125.504,0,102.421C0,58.65,35.61,23.04,79.381,23.04
		c29.604,0,55.474,16.286,69.119,40.372c13.645-24.086,39.516-40.372,69.119-40.372c43.77,0,79.381,35.61,79.381,79.381
		c0,23.083-7.847,46.558-23.323,69.771c-12.014,18.021-28.664,35.957-49.488,53.311c-35.071,29.226-69.645,46.647-71.1,47.374
		C151.645,273.6,150.072,273.96,148.5,273.96z M79.381,43.564c-32.453,0-58.856,26.403-58.856,58.856
		c0,75.731,104.584,136.931,127.972,149.665c23.379-12.75,127.979-74.044,127.979-149.665c0-32.453-26.403-58.856-58.856-58.856
		c-32.454,0-58.856,26.403-58.856,58.856c0,5.667-4.596,10.263-10.263,10.263s-10.263-4.596-10.263-10.263
		C138.237,69.968,111.835,43.564,79.381,43.564z"
                  />
                </Heart>
              </HeartContainer>{' '}
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
  align-items: flex-end;
  padding: 0.25em;
  font-size: small;
`;

const HeartContainer = styled.span`
  cursor: pointer;
  position: relative;
  margin: 0 0.3rem;
  display: flex;
  align-items: center;
`;

const Heart = styled.svg`
  width: 1.2rem;
  height: 1.2rem;
  fill: var(--color-primary);
`;
