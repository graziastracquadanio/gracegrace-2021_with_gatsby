import React from 'react';

import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { Tag as TagType } from 'types/tag';

interface Props {
  className?: string;
  tag: TagType;
  onClick?: () => void;
  variant?: string;
}

export const Tag: React.FC<Props> = ({ tag, onClick, className, variant }) => {
  if (onClick) {
    return (
      <TagButton onClick={onClick} className={className} variant={variant}>
        {tag.name}
      </TagButton>
    );
  }
  return (
    <TagLink to="/recipes" state={{ selectedTags: [tag.id] }} className={className} variant={variant}>
      {tag.name}
    </TagLink>
  );
};

const TagStyle = css<{ variant?: string }>`
  font-family: var(--font-secondary);
  font-size: 0.9rem;
  font-weight: var(--font-weight-bold);
  background-color: var(--color-${(props) => (props.variant ? props.variant : 'highlight')});
  color: var(--color-text);
  text-transform: uppercase;
  padding: 0.25em 0.75em;
  border-radius: 3px;
  transition: all var(--theme-transition);
  position: relative;

  &:before {
    content: '#';
    margin-right: 0.25rem;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
    box-shadow: var(--color-${(props) => (props.variant ? props.variant : 'highlight')}) 0px 0px 0px 2px;
    transition: all 0.1s ease-out;
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.5;
  }
`;

const TagButton = styled.button`
  ${TagStyle};
  border: none;
  outline: none;
`;

const TagLink = styled(Link)`
  ${TagStyle};
  text-decoration: none;
`;
