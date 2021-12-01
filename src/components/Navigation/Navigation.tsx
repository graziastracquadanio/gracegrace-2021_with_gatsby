import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

const Navigation: React.FC = () => (
  <NavigationContainer>
    <NavigationList>
      <NavigationItem>
        <NavigationItemLink to="/about" activeClassName="mod-active">
          About
        </NavigationItemLink>

        <NavigationItemLink to="/styleguide" activeClassName="mod-active">
          Styleguide
        </NavigationItemLink>
      </NavigationItem>
    </NavigationList>
  </NavigationContainer>
);

const NavigationContainer = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: $z-index-top-menu;

  background-color: rgba($color-secondary, 0.9);

  animation: mainNavbarTopAnimation 0.3s ease-out;
  animation-fill-mode: both;
  animation-delay: 1.5s;
`;

const NavigationList = styled.ul``;

const NavigationItem = styled.li``;

const NavigationItemLink = styled(Link)``;

export default Navigation;
