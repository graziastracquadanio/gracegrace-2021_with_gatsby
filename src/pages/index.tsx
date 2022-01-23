import React from 'react';

import { navigate } from 'gatsby';

const Home: React.FC = () => {
  navigate('/about');
  return null;
};

export default Home;
