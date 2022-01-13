import React, { useEffect, useMemo, useState } from 'react';

import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Button } from 'components/Button';
import { Input } from 'components/form';
import { Tag as TagButton } from 'components/Tag';
import { useRootStore } from 'contexts/RootStoreContext';
import { Tag } from 'types/tag';

export const TagsEditor = observer(function TagsEditor() {
  const { tagsStore } = useRootStore();
  const [newTagName, setNewTagName] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const tags = useMemo(() => tagsStore.tags, [tagsStore.tags]);

  const saveTag = async () => {
    if (newTagName) {
      // TODO : check if already exists
      // select tag
      const id = newTagName.trim().toLowerCase().replaceAll(' ', '-');
      const newTag = { id, name: newTagName };
      await tagsStore.addTag(newTag);
      setNewTagName('');
    }
  };

  const toggleTag = (tag: Tag) => {
    const isSelected = selectedTags.includes(tag);
    if (isSelected) {
      setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div>
      <TagsList>
        {tags &&
          tags?.map((tag) => (
            <StyledTag
              key={tag.id}
              tag={tag}
              onClick={() => {
                toggleTag(tag);
              }}
              selected={selectedTags.includes(tag)}
            >
              {tag.name}
            </StyledTag>
          ))}
      </TagsList>

      {selectedTags.map((tag) => tag.name)}

      <TagControl>
        <StyledInput
          value={newTagName}
          onChange={(e) => {
            setNewTagName(e.target.value);
          }}
          placeholder="Add new"
        />
        <StyledButton onClick={saveTag} disabled={!newTagName}>
          Add
        </StyledButton>
      </TagControl>
    </div>
  );
});

const TagsList = styled.div`
  display: inline-block;
`;

const StyledTag = styled(TagButton)<{ selected?: boolean }>`
  background-color: var(--color-${(props) => (props.selected ? 'primary' : 'gray')});
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TagControl = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const StyledInput = styled(Input)`
  flex: 1;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const StyledButton = styled(Button)`
  padding-left: 1rem;
  padding-right: 1rem;
`;
