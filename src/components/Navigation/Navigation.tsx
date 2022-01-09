import React from 'react';

import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import NavigationItemLink from './NavigationItemLink';
import ThemeToggle from './ThemeToggle';
import { Button } from 'components/Button';
import { useRootStore } from 'contexts/RootStoreContext';

const Navigation: React.FC = observer(() => {
  const { authStore } = useRootStore();

  return (
    <NavigationContainer
      initial={{ translateY: '-100%' }}
      animate={{ translateY: 0 }}
      transition={{
        ease: 'easeOut',
        duration: 0.3,
        delay: 1,
      }}
    >
      <NavigationList>
        <NavigationItemLink to="/about">About</NavigationItemLink>
        <NavigationItemLink to="/styleguide">Styleguide</NavigationItemLink>
        <NavigationItemLink to="/recipes">Recipes</NavigationItemLink>
        <NavigationItemLink to="/contact">Contact</NavigationItemLink>
        <NavigationSpacer />
        <ThemeToggle />
        {authStore.isLoggedIn && (
          <Button variant="primary" size="small" onClick={authStore.logout}>
            Logout
          </Button>
        )}
      </NavigationList>
    </NavigationContainer>
  );
});

const NavigationContainer = styled(motion.nav)`
  width: 100%;
  padding: 1em 0;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: var(--zindex-navigation-menu);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
    transition: background var(--theme-transition);
    opacity: 0.9;
    z-index: -1;
  }
`;

const NavigationList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
`;

const NavigationSpacer = styled.span`
  flex: 1;
`;

export default Navigation;
