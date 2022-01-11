import React from 'react';

import { Section } from './Section';
import { MarkdownEditor } from 'components/form';

const preview = `
  ### This is a preview

  Black beans cozy butternut cinnamon cumin tasty lavender
  lemonade **Caribbean** red habanero orange ginger tofu farro
  platter _red lentil curry_ vitamin glow vegan lemon cashew
  balsamic vinaigrette Southern Italian. Lentils alfalfa sprouts
  paprika açai ghost pepper instant pot blueberry pops
  strawberry
  - 1/2 cup of _mango_ smoothie
  - **arugula** salad
  - udon noodles crispy
  - iceberg lettuce
`;

export const MarkdownSection = () => (
  <Section title="Markdown tester">
    <MarkdownEditor value={preview} />
  </Section>
);
