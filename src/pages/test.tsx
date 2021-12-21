import React from 'react';

import { graphql, PageProps } from 'gatsby';

import { HomePageQuery } from 'generated/graphql-types';

const TestPage: React.FC<PageProps<HomePageQuery>> = ({ data }) => {
  const { description } = data.site?.siteMetadata || {};
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
