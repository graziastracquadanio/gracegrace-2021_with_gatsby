import React from 'react';

import styled from 'styled-components';

import { ThemeContext, ThemeProps } from 'contexts/ThemeContext';

const Tag: React.FC = ({ children }) => {
  const { colorMode } = React.useContext(ThemeContext);
  return <StyledTag colorMode={colorMode}>{children}</StyledTag>;
};

const StyledTag = styled.span<Partial<ThemeProps>>`
  font-family: var(--font-secondary);
  font-size: smaller;
  color: var(--color-${(props) => (props.colorMode === 'dark' ? 'background' : 'text')});
  background-color: var(--color-accent);
  text-transform: uppercase;
  padding: 0.25em 0.5em;
`;

export default Tag;
