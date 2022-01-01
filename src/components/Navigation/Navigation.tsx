import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import NavigationItemLink from './NavigationItemLink';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => (
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
      <NavigationItemLink to="/recipes/some-id">Recipe test</NavigationItemLink>
      <NavigationItemLink to="/recipes">Recipes</NavigationItemLink>
      <NavigationItemLink to="/contact">Contact</NavigationItemLink>
      <NavigationSpacer />
      <ThemeToggle />
    </NavigationList>
  </NavigationContainer>
);

const NavigationContainer = styled(motion.nav)`
  width: 100%;
  padding: 1em 0;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: var(--zindex-navigation-menu);

  /* animation: mainNavbarTopAnimation 0.3s ease-out;
  animation-fill-mode: both;
  animation-delay: 1.5s; */

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
  gap: 1em;
`;

const NavigationSpacer = styled.span`
  flex: 1;
`;

export default Navigation;
