const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');

const nodeGlobals = {
  global: true,
  process: true,
  Buffer: true,
  __dirname: true,
  __filename: true,
  exports: true,
  module: true,
  require: true,
  console: true,
  setTimeout: true,
  clearTimeout: true,
  setInterval: true,
  clearInterval: true,
  setImmediate: true,
  clearImmediate: true,
};

module.exports = [
   {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: nodeGlobals,
    },
  },
	js.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: './tsconfig.json',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
			'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
		},
	},
	{
		ignores: ['dist/', 'node_modules/'],
	},
];
