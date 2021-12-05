import React from 'react';

import styled from 'styled-components';

import { TextLink } from 'components/TextLink';

const ContactPage: React.FC = () => {
  return (
    <LayoutContainer>
      <h1>Say hello!</h1>
      <h5>
        If you would like to get in touch you can reach me in different ways! If you prefer email you can send a message
        directly at{' '}
        <TextLink to="mailto:graziastracquadanio@gmail.com" target="_blank">
          graziastracquadanio@gmail.com
        </TextLink>
        .
      </h5>
      <h6>Elsewhere, I can be found at the following:</h6>
      <ul>
        <li>
          <h6>
            Github:{' '}
            <TextLink to="https://github.com/graziastracquadanio" target="_blank" rel="noreferrer">
              graziastracquadanio
            </TextLink>
          </h6>
        </li>
        <li>
          <h6>
            Codepen:{' '}
            <TextLink to="https://codepen.io/graziastrax" target="_blank" rel="noreferrer">
              graziastrax
            </TextLink>
          </h6>
        </li>
        <li>
          <h6>
            Linkedin:{' '}
            <TextLink to="https://www.linkedin.com/in/graziastracquadanio/en/" target="_blank" rel="noreferrer">
              graziastracquadanio
            </TextLink>
          </h6>
        </li>
        <li>
          <h6>
            Instagram:{' '}
            <TextLink to="https://www.instagram.com/finding_grace__/" target="_blank" rel="noreferrer">
              finding_grace__
            </TextLink>
          </h6>
        </li>
      </ul>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const Social = styled.div`
  min-height: 20em;
  background: blue;
  grid-area: social;
`;

export default ContactPage;
