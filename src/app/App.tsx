import React from 'react';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { RootStoreProvider } from 'contexts/RootStoreContext';
import { ThemeProvider } from 'contexts/ThemeContext';

export const App: React.FC = ({ children }) => {
  const db = getFirestore();
  const storage = getStorage();
  return (
    <ThemeProvider>
      <RootStoreProvider db={db} storage={storage}>
        {children}
      </RootStoreProvider>
    </ThemeProvider>
  );
};
