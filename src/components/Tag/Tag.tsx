import React from 'react';

import styled from 'styled-components';

const Tag: React.FC = ({ children }) => {
  return <StyledTag>{children}</StyledTag>;
};

const StyledTag = styled.span`
  font-family: var(--font-secondary);
  font-size: smaller;
  color: var(--color-${(props) => (props.theme.colorMode === 'dark' ? 'background' : 'text')});
  background-color: var(--color-accent);
  text-transform: uppercase;
  padding: 0.25em 0.5em;
`;

export default Tag;
