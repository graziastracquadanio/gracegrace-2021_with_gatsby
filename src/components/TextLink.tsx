import React from 'react';

import { GatsbyLinkProps, Link } from 'gatsby';
import styled, { css } from 'styled-components';

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

const LinkStyle = css`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

const LinkStyleLightTheme = css`
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  background: linear-gradient(120deg, var(--color-highlight) 0%, var(--color-highlight) 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 90%;

  /* background: linear-gradient(to bottom, var(--color-accent) 0%, var(--color-accent) 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px; */
  transition: background-size 0.3s ease;

  &:hover {
    /* background-size: 4px 50px; */
    transition: background 0.2s linear;
    color: var(--color-secondary);
    background: linear-gradient(120deg, var(--color-gray-light) 0%, var(--color-gray-light) 100%);
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
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  color: var(--color-primary);
  -webkit-tap-highlight-color: transparent;
  font-weight: 500;
  transition: all 0s linear;

  &:hover {
    color: var(--color-background);
    background-color: var(--color-primary);
    transition: all 0.1s linear 0.05s;
  }
`;

const StyledLink = styled(Link)`
  ${LinkStyle};
  ${(props) => (props.theme.colorMode === 'dark' ? LinkStyleDarkTheme : LinkStyleLightTheme)}
`;

const StyledAnchor = styled.a`
  ${LinkStyle};
  ${(props) => (props.theme.colorMode === 'dark' ? LinkStyleDarkTheme : LinkStyleLightTheme)}
`;
