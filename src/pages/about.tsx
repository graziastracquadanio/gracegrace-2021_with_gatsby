import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <section>
        <h1>Hi there, I&apos;m Grazia!</h1>
        <h3>
          I am a front-end developer who loves building cool user-friendly web apps, enjoys discover best practices and
          loves learning and experiment new things. I also really like{' '}
          <a href="https://codepen.io/graziastrax" target="_blank" rel="noreferrer">
            drawing with code
          </a>
          .
        </h3>
        <h3>
          In the last {new Date().getFullYear() - 2012} years have been building web apps using Angular and React and
          many other libraries and tools. I also love animations.
        </h3>
      </section>

      <section>
        <h2>But I&apos;m also...</h2>
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
              in love with <a href="/recipes">healthy vegan food</a>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default AboutPage;
