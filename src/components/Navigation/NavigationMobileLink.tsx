import React from 'react';

import { GatsbyLinkProps, Link } from 'gatsby';
import styled from 'styled-components';

import { Icon } from 'components/Icon';
import { BREAKPOINTS } from 'constants/css-variables';

interface Props extends Omit<GatsbyLinkProps<{}>, 'ref'> {
  icon: string;
}

export const NavigationMobileLink: React.FC<Props> = ({ icon, ...props }) => (
  <NavigationLink activeClassName="mod-active" {...props}>
    <NavigationIcon icon={icon} activeClass="mod-active" />
  </NavigationLink>
);

const NavigationLink = styled(Link)`
  @media (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;

const NavigationIcon = styled(Icon)`
  height: 1.8rem;
`;
