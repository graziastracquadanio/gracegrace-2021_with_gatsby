import React from 'react';

import { ThemeContext } from 'contexts/ThemeContext';

const DarkToggle: React.FC = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <button type="button" role="button" onClick={toggleColorMode}>
      {colorMode}
    </button>
  );
};

export default DarkToggle;
