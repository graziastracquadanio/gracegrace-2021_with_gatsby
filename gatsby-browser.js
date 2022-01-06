import '@fontsource/open-sans';
import '@fontsource/zilla-slab';

import React from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { AnimatePresence } from 'framer-motion';

import { RootStoreProvider } from './src/contexts/RootStoreContext';
import { ThemeProvider } from './src/contexts/ThemeContext';

const firebaseCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseCredentials);

export const wrapRootElement = ({ element }) => {
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  return (
    <ThemeProvider>
      <RootStoreProvider db={db} storage={storage}>
        {element}
      </RootStoreProvider>
    </ThemeProvider>
  );
};

// export function wrapPageElement({ element }) {
//   return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
// }
