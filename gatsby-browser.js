import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/zilla-slab/400.css';

import React from 'react';

import { initializeApp } from 'firebase/app';

import { App } from './src/app';

const firebaseCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

initializeApp(firebaseCredentials);

export function wrapPageElement({ element }) {
  return <App>{element}</App>;
}
