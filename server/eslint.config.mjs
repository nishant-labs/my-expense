import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
	files: ['**/*.ts', '**/*.tsx'],
	languageOptions: {
		parser: tseslint.parser,
		globals: {
			...globals.node,
		},
	},
	plugins: {
		'@typescript-eslint': tseslint.plugin,
	},
});
