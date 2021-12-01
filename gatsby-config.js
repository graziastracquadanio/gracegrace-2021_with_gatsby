const fs = require('fs');
const path = require('path');

const srcDirs = fs.readdirSync(path.resolve(__dirname, 'src'));

const rootDirsConfig = {};

srcDirs.forEach((srcDir) => {
  rootDirsConfig[srcDir] = path.resolve(__dirname, 'src', srcDir);
});

module.exports = {
  siteMetadata: {
    siteUrl: 'http://www.gracegrace.me',
    title: 'gracegrace',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: rootDirsConfig,
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-layout',
  ],
};
