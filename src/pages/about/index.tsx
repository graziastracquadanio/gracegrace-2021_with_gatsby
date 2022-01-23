import React from 'react';

import styled from 'styled-components';

import { TextLink } from 'components/TextLink';

const AboutPage: React.FC = () => {
  return (
    <Container>
      <section>
        <h1>Hi there, I&apos;m Grazia!</h1>
      </section>
      <section>
        <StyledH6>
          I am a front-end developer who loves building cool user-friendly web apps, enjoys discovering best practices
          and loves learning and experimenting with new things.
        </StyledH6>
        <StyledH6>
          In the last {new Date().getFullYear() - 2012} years have been building web apps using Angular and React and
          many other libraries and tools, working in various countries with different types of teams.
          <br />
          Are you interested in my <TextLink to="/about/resume">work experience</TextLink>?
        </StyledH6>
        <StyledH6>
          Sometimes{' '}
          <TextLink to="https://codepen.io/graziastrax" target="_blank" rel="noreferrer">
            I like drawing with code
          </TextLink>
          , some other times{' '}
          <TextLink to="https://www.instagram.com/sialokesia/" target="_blank" rel="noreferrer">
            I whittle little weirdos
          </TextLink>
          .<br />
          In any case, I always love to have fun!
        </StyledH6>
      </section>

      <section>
        <h4>But I&apos;m also...</h4>
        <StyledList>
          <li>
            <StyledH6>building my van</StyledH6>
          </li>
          <li>
            <StyledH6>doing lot of running and yoga</StyledH6>
          </li>
          <li>
            <StyledH6>learning to play guitar</StyledH6>
          </li>
          <li>
            <StyledH6>
              in love with <TextLink to="/recipes">healthy vegan food</TextLink>
            </StyledH6>
          </li>
        </StyledList>
      </section>
    </Container>
  );
};

const Container = styled.div`
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
  font-weight: var(--font-weight-secondary);
  line-height: 1.5;
`;

export default AboutPage;
