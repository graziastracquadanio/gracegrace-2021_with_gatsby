import React from 'react';

import styled from 'styled-components';

export interface CodeProps {
  activeClass?: string;
}

export const Code: React.FC<CodeProps> = ({ activeClass = 'active' }) => (
  <Svg activeClass={activeClass} viewBox="0 0 24 24">
    <Path d="M6.5 8.5L3 12L6.5 15.5" />
    <Path d="M13.5 6L10 18.5" />
    <Path d="M17.5 8.5L21 12L17.5 15.5" />
  </Svg>
);

const Path = styled.path`
  fill: none;
  transition: all 0.2s ease-in;
`;

const Svg = styled.svg<CodeProps>`
  height: 100%;
  width: auto;

  fill: none;
  stroke: var(--color-icon);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;

  &:hover,
  ${(props) => `.${props.activeClass}`} & {
    stroke: var(--color-icon-active);
  }

  &:hover {
    ${Path}:first-child {
      transform: translateX(-3px);
    }

    ${Path}:nth-child(2) {
      transform-origin: center;
      transform: scale(1, 1.3);
    }

    ${Path}:last-child {
      transform: translateX(3px);
    }
  }
`;
