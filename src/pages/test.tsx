import React from 'react';

import { graphql, PageProps } from 'gatsby';

const TestPage: React.FC<PageProps<any>> = ({ data }) => {
  const { description } = data?.site?.siteMetadata || {};
  return <div>{description}</div>;
};

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default TestPage;
