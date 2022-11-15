module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'padded-blocks': 'off',
    'space-before-blocks': 'off',
    'consistent-return': 'off',
    'no-promise-executor-return': 'off',
    'no-const-assign': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
