/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { TextLink } from 'components/TextLink';
import { BREAKPOINTS, COLORS, PALETTE, HEADINGS } from 'constants/css-variables';
import { useThemeContext } from 'contexts/ThemeContext';
import { copyToClipboard } from 'utils/others';

const StyleguidePage: React.FC = () => {
  const { colorMode } = useThemeContext();
  const [message, setMessage] = useState<string | null>(null);

  const onCopy = (value: string) => {
    setMessage(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [message, setMessage]);

  const colors = useMemo(
    () => (colorSet: any) =>
      Object.keys(colorSet).map((color) => (
        <ColorItem key={`color-${color}`} onClick={() => copyToClipboard(`var(--color-${color})`, onCopy)}>
          <ColorItemBackground color={color} />
          <ColorItemsText>
            <small>{color}</small>
            {colorMode && <small>{colorSet[color][colorMode]}</small>}
          </ColorItemsText>
        </ColorItem>
      )),
    [colorMode],
  );

  const steps = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LayoutContainer>
      <AnimatePresence>
        {message && (
          <Message initial="hidden" animate="visible" exit="hidden" variants={steps}>
            {message} copied to clipboard!
          </Message>
        )}
      </AnimatePresence>
      <h6>This is a place where I play and test the style and have fun.</h6>
      <Section>
        <Title>Colors</Title>
        <p>
          Use <code>var(--color-name)</code> as CSS variable. Updated automatically on switching theme.
        </p>
        <Subsection>
          <h5>Palette</h5>
          <p>
            Where possible avoid using directly the palette. Prefer the use cases or adjust the color using the theme
            context.
          </p>
          <ColorsList>{colors(PALETTE)}</ColorsList>
        </Subsection>
        <Subsection>
          <h5>Uses</h5>
          <ColorsList>{colors(COLORS)}</ColorsList>
        </Subsection>
      </Section>
      <Section>
        <Title>Headings</Title>
        <HorizontalList>
          {Object.entries(HEADINGS).map(([h, size]) => {
            const heading = `<${h}>${size}em</${h}>`;
            return <span key={`test-heading-size-${h}`} dangerouslySetInnerHTML={{ __html: heading }} />;
          })}
        </HorizontalList>
        <VerticalList>
          {Object.entries(HEADINGS).map(([h]) => {
            const heading = `<${h}>Broccoli ${h.toUpperCase()}</${h}>`;
            return (
              <div key={`test-heading-${h}`}>
                <div dangerouslySetInnerHTML={{ __html: heading }} />
                <p>
                  Shallots portobello mushrooms black beans salty peanut butter crunch spring thyme peach strawberry
                  mango cilantro lime vinaigrette dragon fruit.
                </p>
              </div>
            );
          })}
        </VerticalList>
      </Section>

      <Section>
        <Title>P - Paragraph text</Title>
        <p>
          Pinch of yum peanut butter comforting pumpkin spice latte mediterranean luxury bowl green tea lime ginger
          lemongrass banana <TextLink to="">this is how a link looks between a banana and an avocado</TextLink> avocado
          dressing drizzle mocha chocolate habanero golden cauliflower eating together grapefruit pumpkin sweet potato
          black bean burrito kale almonds. Black bean wraps couscous green pepper pineapple salsa a delicious meal
          Malaysian garlic sriracha noodles dark chocolate chai tea oranges tasty açai picnic jalapeño ginger tofu soy
          milk rich coconut cream almond milk naga viper chilies farro platter broccoli fall appetizer.
        </p>
        <p>
          Albert Einstein is credited with saying,{' '}
          <mark>
            “Nothing will benefit human health and increase the chances for survival of life on Earth as much as the
            evolution to a vegetarian diet.”
          </mark>
        </p>
        <p>
          Casserole lentils lime mango crisp double dark chocolate spiced peppermint blast mint hazelnut shiitake
          ultimate winter orange edamame parsley black beans sweet potato bite sized dark and stormy red amazon pepper
          walnut mushroom tart Thai dragon pepper hemp seeds banana bread bruschetta. dessert.
        </p>
        <p>
          <small>
            While I test how small text looks like with links and stuff you can check some{' '}
            <TextLink to="https://www.tastybite.com/2016/04/5-things-you-didnt-know-about-cilantro/" target="_blank">
              fun facts about cilantro and why you probably like it or not
            </TextLink>
            .
          </small>
        </p>

        <p>
          Also I need to test how the code looks, so.... How great would it be if <code>npm install -g veganism</code>?
        </p>

        <p>
          <small>
            This delicious text was provided by{' '}
            <TextLink to="https://veganipsum.me/" target="_blank" rel="noreferrer">
              veganipsum.me
            </TextLink>
          </small>
        </p>
      </Section>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: grid;
  grid-gap: 1em;
`;

const Section = styled.section`
  background-color: var(--color-muted);
  transition: background var(--theme-transition);
  padding: 1em;
`;

const Subsection = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
  margin-bottom: 0.5em;
  transition: all var(--theme-transition);
`;

const ColorsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 1em;
  row-gap: 1em;

  @media (min-width: ${BREAKPOINTS.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ColorItem = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ColorItemBackground = styled.div`
  width: 100%;
  height: 2rem;
  background-color: var(${(props) => `--color-${props.color}`});
  transition: background var(--theme-transition);

  @media (min-width: ${BREAKPOINTS.large}) {
    height: 4rem;
  }
`;

const ColorItemsText = styled.p`
  display: flex;
  flex-direction: column;
`;

const HorizontalList = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 1rem;
`;

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled(motion.p)`
  position: fixed;
  bottom: 0;
  right: 3rem;
  background-color: var(--color-highlight);
  border-radius: 5px;
  color: var(--color-text);
  padding: 0 1rem;
`;

export default StyleguidePage;
