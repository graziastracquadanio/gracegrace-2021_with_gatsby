import React from 'react';

import { graphql, PageProps } from 'gatsby';

import { HomePageQuery } from '../../graphql-types';

// eslint-disable-next-line react/prop-types
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
