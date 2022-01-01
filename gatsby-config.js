const fs = require('fs');
const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const srcDirs = fs.readdirSync(path.resolve(__dirname, 'src'));

const rootDirsConfig = {};

srcDirs.forEach((srcDir) => {
  rootDirsConfig[srcDir] = path.resolve(__dirname, 'src', srcDir);
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.gracegrace.me',
    title: 'gracegrace',
    description: 'this is gracegrace.me',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: rootDirsConfig,
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'src/generated/graphql-types.ts',
        documentPaths: ['./src/**/*.{ts,tsx}', './node_modules/gatsby-*/**/*.js'],
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
      },
    },
  ],
};
