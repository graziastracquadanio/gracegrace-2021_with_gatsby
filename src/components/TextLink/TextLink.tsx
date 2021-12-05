import React from 'react';

import { GatsbyLinkProps, Link } from 'gatsby';
import styled, { css } from 'styled-components';

type Props = Omit<GatsbyLinkProps<{}>, 'ref'>;
// & React.HTMLProps<HTMLAnchorElement>;

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const TextLink: React.FC<Props> = ({ to, activeClassName, partiallyActive, ...other }) => {
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

const LinkStyleLightTheme = css`
  color: inherit;
  text-decoration: none;
  background: linear-gradient(120deg, var(--color-highlight) 0%, var(--color-highlight) 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 90%;

  &:hover {
    transition: background 0.2s linear;
    color: var(--color-secondary);
    background: linear-gradient(120deg, var(--color-gray) 0%, var(--color-gray) 100%);
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-position: 50% 90%;
  }

  small & {
    color: var(--color-primary);
    background: none;
  }
`;

const LinkStyleDarkTheme = css`
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    color: var(--color-background);
    background-color: var(--color-primary);
  }
`;

const StyledLink = styled(Link)`
  ${(props) => (props.theme.colorMode === 'dark' ? LinkStyleDarkTheme : LinkStyleLightTheme)}
`;

const StyledAnchor = styled.a`
  ${(props) => (props.theme.colorMode === 'dark' ? LinkStyleDarkTheme : LinkStyleLightTheme)}
`;

export default TextLink;
