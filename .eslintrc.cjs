/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:nuxt/recommended',

    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    '@import-js/eslint-plugin-tailwindcss',

  ],
  overrides: [
    {
      files: ['server/**'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['plugin:@typescript-eslint/recommended'],
    }  
  ]
}
