import React from 'react';

import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { LogoutButton } from './LogoutButton';
import NavigationItemLink from './NavigationItemLink';
import ThemeToggle from './ThemeToggle';
import { ZINDEX } from 'constants/css-variables';
import { useRootStore } from 'contexts/RootStoreContext';

const Navigation: React.FC = observer(() => {
  const { authStore } = useRootStore();

  return (
    <NavigationContainer>
      <NavigationList
        initial={{ translateY: '-200%' }}
        animate={{ translateY: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
          delay: 1,
        }}
      >
        <NavigationItemLink to="/">About</NavigationItemLink>
        <NavigationItemLink to="/recipes" partiallyActive>
          Recipes
        </NavigationItemLink>
        <NavigationItemLink to="/styleguide">Styleguide</NavigationItemLink>
        <NavigationItemLink to="/contact">Contact</NavigationItemLink>
        <NavigationSpacer />
        {authStore.isLoggedIn && <StyledLogoutButton onClick={authStore.logout} />}
        <StyledThemeToggle />
      </NavigationList>
    </NavigationContainer>
  );
});

const NavigationContainer = styled.nav`
  width: 100%;
  padding: 0.75em 0 1rem;
  margin-top: 8px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: ${ZINDEX.navigationMenu};
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
    transition: background var(--theme-transition);
    opacity: 0.8;
    z-index: -1;
  }
`;

const NavigationList = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
`;

const NavigationSpacer = styled.span`
  flex: 1;
`;

const StyledLogoutButton = styled(LogoutButton)`
  height: 2rem;
`;

const StyledThemeToggle = styled(ThemeToggle)`
  height: 2rem;
`;

export default Navigation;
