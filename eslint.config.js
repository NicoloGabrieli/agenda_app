import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import svelteParser from 'svelte-eslint-parser';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default [
	{
		ignores: ['.svelte-kit/**', 'build/**', 'dist/**', 'node_modules/**']
	},

	{
		files: ['**/*.{js,ts}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module'
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...js.configs.recommended.rules
		}
	},

	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.svelte'],
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		plugins: {
			svelte
		},
		rules: {
			...svelte.configs['flat/recommended'].rules
		}
	},

	prettier
];
