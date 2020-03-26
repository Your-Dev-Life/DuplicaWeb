module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'import',
    'react',
    'jest',
  ],
  rules: {
    'import/no-dynamic-require': 0,
    'global-require': 0,
  },
  env: {
    browser: true
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    }
  },
  globals: {
    localStorage: true
  }
};
