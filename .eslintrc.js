module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    camelcase: 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.jsx', '.js'],
      },
    ],
    'max-len': ['error', { code: 120 }],
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'warn',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.*',
          '**/.storybook/**/*.*',
        ],
        peerDependencies: true,
      },
    ],
  },
};
