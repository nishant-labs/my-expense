import eslint from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import pluginQuery from '@tanstack/eslint-plugin-query';
import reactHooks from 'eslint-plugin-react-hooks';

export default tsEslint.config(
	{
		ignores: ['**/dist/**'],
	},
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigDirName: import.meta.dirname,
			},
		},
	},
	{
		files: ['client/**/*.{ts,tsx}'],
		...pluginQuery.configs['flat/recommended'][0],
	},
	{
		files: ['client/**/*.{ts,tsx}'],
		ignores: ['client/**/*.test.{ts,tsx}'],
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			...reactHooks.configs.recommended.rules,
		},
	},
	{
		files: ['**/*.{mjs,js}'],
		languageOptions: {
			globals: { ...globals.node, ...globals.nodeBuiltin },
		},
		...tsEslint.configs.disableTypeChecked,
	},
);
