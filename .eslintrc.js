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
  },
};
