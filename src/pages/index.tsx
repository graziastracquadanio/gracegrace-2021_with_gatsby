import React from 'react';

import { PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = ({ path }: PageProps) => {
  return (
    <>
      <h1>Path:</h1>
      <p>{path}</p>
    </>
  );
};

export default IndexPage;
