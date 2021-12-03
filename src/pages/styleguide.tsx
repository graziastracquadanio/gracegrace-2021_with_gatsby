/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from 'constants/css-variables';

const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyleguidePage: React.FC = () => {
  const colors = Object.keys(COLORS).map((color) => (
    <ColorItem key={`color-${color}`}>
      <ColorItemBackground color={color} />
      <p>{color}</p>
    </ColorItem>
  ));

  return (
    <>
      <SectionContainer>
        <ColorsList>{colors}</ColorsList>
      </SectionContainer>

      <SectionContainer>
        <TypographyContainer>
          <h1>H1 - Heading one</h1>
          <h2>H2 - Heading two</h2>
          <h3>H3 - Heading three</h3>
          <h4>H4 - Heading four</h4>
          <h5>H5 - Heading five</h5>
          <h6>H6 - Heading six</h6>
          <p>P - Paragraph text</p>
          <p>
            <a>Link inside a paragraph</a>
          </p>
        </TypographyContainer>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.section`
  margin-bottom: 2em;
`;

const ColorsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 1em;
  row-gap: 1em;

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ColorItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const ColorItemBackground = styled.div`
  width: 100%;
  height: 4rem;
  background-color: var(${(props) => `--color-${props.color}`});
`;

export default StyleguidePage;
