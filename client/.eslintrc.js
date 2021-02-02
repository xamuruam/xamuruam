module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/vue',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'arrow-parens': 'error',
    'jsx-quotes': 'error',
    'no-param-reassign': 'off',
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/prop-name-casing': ['error', 'snake_case'],
    'array-callback-return': 'off',
    'no-unused-vars': 'warn',
    'no-restricted-syntax': 'off',
    'newline-after-import': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  plugins: ['prettier']
};
