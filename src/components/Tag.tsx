import React from 'react';

import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { Tag as TagType } from 'types/tag';

interface Props {
  className?: string;
  tag: TagType;
  linkTo?: string;
  onClick?: () => void;
}

export const Tag: React.FC<Props> = ({ linkTo, tag, onClick, className }) => {
  if (linkTo) {
    return (
      <TagLink to={linkTo} className={className}>
        # {tag.name}
      </TagLink>
    );
  }
  return (
    <TagButton onClick={onClick} className={className}>
      # {tag.name}
    </TagButton>
  );
};

const TagStyle = css`
  font-family: var(--font-secondary);
  font-size: 0.8rem;
  background-color: var(--color-primary-dark);
  color: var(--color-background);
  text-transform: uppercase;
  padding: 0.5em 0.75em;
  border-radius: 3rem;
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
