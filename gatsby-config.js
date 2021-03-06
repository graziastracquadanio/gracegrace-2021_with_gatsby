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
    'gatsby-plugin-typescript',
  ],
};
