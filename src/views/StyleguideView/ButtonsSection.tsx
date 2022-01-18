import React from 'react';

import styled from 'styled-components';

import { Section } from './Section';
import { Button } from 'components/Button';
import { Tag } from 'components/Tag';

export const ButtonsSection = () => {
  const tag = {
    id: 'hummus',
    name: 'hummus',
  };

  return (
    <Section title="Buttons and similar stuff">
      <List>
        <ListItem>
          <div>
            <p>Medium size</p>
            <Button size="medium">Click me</Button>
          </div>
          <div>
            <p>Small size</p>
            <Button size="small">Click me</Button>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <p>Tag as link</p>
            <Tag tag={tag} />
          </div>
          <div>
            <p>Tag as button</p>
            <Tag tag={tag} onClick={() => console.log('are you hungry?')} />
          </div>
        </ListItem>
      </List>
    </Section>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ListItem = styled.li`
  display: flex;
  gap: 1rem;
`;
