import React from 'react';

import { GatsbyLinkProps, Link } from 'gatsby';
import styled from 'styled-components';

import { LinkStyle } from './GlobalStyle/LinkStyle';

type Props = Omit<GatsbyLinkProps<{}>, 'ref'>;
// & React.HTMLProps<HTMLAnchorElement>;

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const TextLink: React.FC<Props> = ({ to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  return internal ? (
    <StyledLink to={to} activeClassName={activeClassName} partiallyActive={partiallyActive} {...other} />
  ) : (
    <StyledAnchor href={to} {...other} />
  );
};

const StyledLink = styled(Link)`
  ${LinkStyle};
`;

const StyledAnchor = styled.a`
  ${LinkStyle};
`;
