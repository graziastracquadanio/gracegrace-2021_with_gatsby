import React from 'react';

import styled from 'styled-components';

import DarkToggle from './DarkToggle';
import NavigationItemLink from './NavigationItemLink';

const Navigation: React.FC = () => (
  <NavigationContainer>
    <NavigationList>
      <NavigationItem>
        <NavigationItemLink to="/about">About</NavigationItemLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLink to="/styleguide">Styleguide</NavigationItemLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLink to="/recipe">Recipe test</NavigationItemLink>
      </NavigationItem>
      <NavigationItem>
        <DarkToggle />
      </NavigationItem>
    </NavigationList>
  </NavigationContainer>
);

const NavigationContainer = styled.nav`
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

const NavigationList = styled.ul`
  width: 100%;
  display: flex;
  gap: 1em;
`;

const NavigationItem = styled.li``;

export default Navigation;
