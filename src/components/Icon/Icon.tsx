import React from 'react';

import styled from 'styled-components';

import { icons } from './icons';

interface Props {
  icon: string;
  activeClass?: string;
}

export const Icon: React.FC<Props> = ({ icon: name, activeClass }) => {
  const IconSvg = icons[name];

  if (!IconSvg) {
    throw new Error('You must select an existing icon or add a new one');
  }

  return (
    <Container>
      <IconSvg activeClass={activeClass} />
    </Container>
  );
};

const Container = styled.span`
  --color-icon: var(--color-text);
  --color-icon-active: var(--color-primary);

  display: block;
  width: auto;
  height: 2.5em;
`;
