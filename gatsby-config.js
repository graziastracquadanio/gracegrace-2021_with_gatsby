const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: '.env' });

const srcDirs = fs.readdirSync(path.resolve(__dirname, 'src'));

const rootDirsConfig = {};

srcDirs.forEach((srcDir) => {
  rootDirsConfig[srcDir] = path.resolve(__dirname, 'src', srcDir);
});

module.exports = {
  siteMetadata: {
    siteUrl: 'http://www.gracegrace.me',
    title: 'gracegrace',
    description: 'this is gracegrace.me',
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: process.env.WP_URL,
    //     schema: {
    //       requestConcurrency: 100,
    //       timeout: 100000,
    //     },
    //   },
    // },
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-plugin-root-import',
      options: rootDirsConfig,
    },
    'gatsby-plugin-apollo',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
  ],
};
