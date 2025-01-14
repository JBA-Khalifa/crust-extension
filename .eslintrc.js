module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    chrome: true,
    browser: true,
    jest: true,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'consistent-return': 0,
    'comma-dangle': 0,
    'spaced-comment': 0,
    'global-require': 0,
    'react/prop-types': 0,
    'react/no-unused-prop-types': [2, {}],
    'class-methods-use-this': 0,
    'react/no-access-state-in-setstate': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'array-callback-return': 0,
    'max-len': 0,
    'no-restricted-globals': 0,
    'arrow-parens': 0,
    'react/jsx-no-bind': 0,
    'react/no-danger': 0,
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'error',
    'no-catch-shadow': 'error',
    'no-useless-catch': 'error',
    'no-param-reassign': 'error',
    'filenames/match-regex': [2, '^[a-z0-9-(.)]+$', true],
  },
  plugins: ['react', 'filenames'],
};
