import React from 'react';
import styled from 'styled-components';

const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function StyleguidePage() {
  return (
    <TypographyContainer>
      <h1>H1 - Heading one</h1>
      <h2>H2 - Heading two</h2>
      <h3>H3 - Heading three</h3>
      <h4>H4 - Heading four</h4>
      <h5>H5 - Heading five</h5>
      <h6>H6 - Heading six</h6>
      <p>P - Paragraph text</p>
      <p>
        <a href="#">Link inside a paragraph</a>
      </p>
    </TypographyContainer>
  );
}
