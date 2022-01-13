import React from 'react';

import { Tag } from 'components/Tag';

export const ButtonsSection = () => {
  const tag = {
    id: 'hummus',
    name: 'hummus',
  };

  return (
    <div>
      <div>
        <p>Tag as link</p>
        <Tag tag={tag} linkTo="#" />
      </div>
      <div>
        <p>Tag as button</p>
        <Tag tag={tag} />
      </div>
    </div>
  );
};
