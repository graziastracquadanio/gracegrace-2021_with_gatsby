import React, { ChangeEventHandler, useEffect } from 'react';

import styled from 'styled-components';

import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from 'components/Button';
import { TrashButton } from 'components/TrashButton';

interface Props {
  name: string;
  values: string[] | undefined;
  rows?: number;
  placeholder?: string;
  handleChange: ChangeEventHandler | undefined;
  onRemoveItem: (index: number) => void;
  onAddItem: (value: any) => void;
}

export const DraggableList: React.FC<Props> = ({
  name,
  values,
  rows = 1,
  placeholder,
  handleChange,
  onAddItem,
  onRemoveItem,
}) => {
  const Control = rows > 1 ? Textarea : Input;

  useEffect(() => {
    if (values?.length === 0) {
      onAddItem('');
    }
  }, [onAddItem, values]);

  return (
    <ControlList>
      {values &&
        values.map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ControlListItem key={`${name}-${index}`}>
            <Control
              name={`${name}.${index}`}
              value={value}
              {...(rows > 1 && { rows })}
              onChange={handleChange}
              placeholder={placeholder}
            />
            {values.length > 1 && <StyledTrashButton color="var(--color-text)" onClick={() => onRemoveItem(index)} />}
          </ControlListItem>
        ))}
      <ActionContainer>
        <Button onClick={() => onAddItem('')} size="small">
          Add new item
        </Button>
      </ActionContainer>
    </ControlList>
  );
};

const ControlList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ControlListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledTrashButton = styled(TrashButton)`
  width: 2rem;
`;

const ActionContainer = styled.li`
  display: flex;
`;
