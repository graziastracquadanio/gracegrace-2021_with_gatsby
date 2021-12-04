import React from 'react';

import styled from 'styled-components';

import { TextLink } from 'components/TextLink';

const AboutPage: React.FC = () => {
  return (
    <div>
      <section>
        <h1>Hi there, I&apos;m Grazia!</h1>
        <StyledH6>
          I am a front-end developer who loves building cool user-friendly web apps, enjoys discover best practices and
          loves learning and experiment new things. I also really like{' '}
          <TextLink to="https://codepen.io/graziastrax" target="_blank" rel="noreferrer">
            drawing with code
          </TextLink>
          .
        </StyledH6>
        <StyledH6>
          In the last {new Date().getFullYear() - 2012} years have been building web apps using Angular and React and
          many other libraries and tools. I also love animations.
        </StyledH6>
      </section>

      <section>
        <p>But I&apos;m also...</p>
        <ul>
          <li>
            <p>learning how to play guitar</p>
          </li>
          <li>
            <p>learning surfing</p>
          </li>
          <li>
            <p>full time travelling around Spain and Portugal</p>
          </li>
          <li>
            <p>doing lot of running</p>
          </li>
          <li>
            <p>
              in love with <TextLink to="/recipes">healthy vegan food</TextLink>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

const StyledH6 = styled.h6`
  font-family: var(--font-secondary);
`;

export default AboutPage;
