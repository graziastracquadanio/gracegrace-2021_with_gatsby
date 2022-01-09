import React from 'react';

import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { ZINDEX } from 'constants/css-variables';
import { useRootStore } from 'contexts/RootStoreContext';

export const LoadingIndicator: React.FC = observer(function LoadingIndicator() {
  const { uiStore } = useRootStore();
  return <ProgressBar isLoading={uiStore.loading} />;
});

const ProgressBar = styled.div<{ isLoading: boolean }>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isLoading ? '0.3rem' : 0)};
  transition: height 0.2s ease-in;
  background-color: var(--color-secondary-light);
  z-index: ${ZINDEX.progressBar};

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--color-secondary);
    border-radius: 5px;
  }

  &:before {
    animation: before 2s cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;
  }

  &:after {
    animation: after 2s cubic-bezier(0.16, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
  }

  @keyframes before {
    0% {
      left: -35%;
      width: 50%;
    }
    60%,
    100% {
      left: 100%;
      width: 0;
    }
  }

  @keyframes after {
    0% {
      left: -200%;
      width: 100%;
    }
    60%,
    100% {
      left: 107%;
      width: 50%;
    }
  }
`;
