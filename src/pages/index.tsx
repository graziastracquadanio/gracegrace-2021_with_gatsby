import React from 'react';

import { navigate } from 'gatsby';

const Home: React.FC = () => {
  // dirty dirty temporary redirect
  if (typeof window !== 'undefined') {
    navigate('/about');
  }
  return null;
};

export default Home;
