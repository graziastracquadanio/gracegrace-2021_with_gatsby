module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    // 'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: 'module',
    // project: './tsconfig.json',
  },
  plugins: ['import', 'react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    // prevent issues between prettier and eslint
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // more eslint config
    'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
    'no-use-before-define': 'off',
    // react config
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // import config
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'], moduleDirectory: ['node_modules', 'src'] },
    },
    react: { version: 'detect' },
  },
};
