import React from 'react';

import styled from 'styled-components';

import { TextLink } from 'components/TextLink';

const AboutPage: React.FC = () => {
  return (
    <LayoutContainer>
      <section>
        <h1>Hi there, I&apos;m Grazia!</h1>
      </section>
      <section>
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
        <h4>But I&apos;m also...</h4>
        <StyledList>
          <li>
            <StyledH6>learning to play guitar</StyledH6>
          </li>
          <li>
            <StyledH6>learning surfing in order to be a veeery-small-waves-pro-surfer</StyledH6>
          </li>
          <li>
            <StyledH6>doing lot of running</StyledH6>
          </li>
          <li>
            <StyledH6>
              in love with <TextLink to="/recipes">healthy vegan food</TextLink>
            </StyledH6>
          </li>
        </StyledList>
      </section>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledList = styled.ul`
  list-style: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 2em;
`;

const StyledH6 = styled.h6`
  font-family: var(--font-secondary);
  line-height: 1.5;
`;

export default AboutPage;
