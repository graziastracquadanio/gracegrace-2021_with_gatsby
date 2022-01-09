import React from 'react';

import { GatsbyLinkProps, Link } from 'gatsby';
import styled from 'styled-components';

type Props = Omit<GatsbyLinkProps<{}>, 'ref'>;

const NavigationItemLink: React.FC<Props> = ({ to, children }) => (
  <NavigationLink to={to} activeClassName="mod-active" partiallyActive>
    {children}
  </NavigationLink>
);

const NavigationLink = styled(Link)`
  --navigation-link-transition: 0.2s linear 0.15s;
  --navigation-link-color: var(--color-text);
  --navigation-link-color-active: var(--color-primary);

  position: relative;
  font-family: var(--font-primary);
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  user-select: none;
  padding: 0.5rem 0.2rem;
  color: var(--navigation-link-color);

  &:hover,
  &.mod-active {
    color: var(--navigation-link-color-active);
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    transform-origin: 50% 50%;
    transform: scaleX(0);
    transition: color var(--theme-transition), background var(--theme-transition),
      transform var(--navigation-link-transition);
    background-color: var(--navigation-link-color);
  }

  &:hover:after,
  &.mod-active:after {
    transform: scaleX(1);
    background-color: var(--navigation-link-color-active);
  }
`;

export default NavigationItemLink;
