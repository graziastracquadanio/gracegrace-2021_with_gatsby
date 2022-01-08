import React from 'react';

import { PageProps } from 'gatsby';

import { Icecream } from 'components/Icecream';

interface NotFoundPageState {
  message?: string;
}

const NotFoundPage: React.FC<PageProps<null, null, NotFoundPageState>> = ({ location }) => (
  <>
    <h3>{location.state.message || 'Page not found'}</h3>
    <Icecream />
  </>
);
export default NotFoundPage;
