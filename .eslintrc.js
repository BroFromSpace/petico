module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential',
		'@nuxtjs/eslint-config-typescript',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'vue',
	],
	rules: {
		quotes: [ 'error', 'single', ],
		semi: [ 'error', 'always', ],
		indent: [ 'error', 'tab', ],
		'comma-dangle': [ 'error', {
			arrays: 'always',
			objects: 'always',
			imports: 'never',
			exports: 'never',
			functions: 'never',
		}, ],
		'no-tabs': 'off',
		'object-curly-spacing': [ 'error', 'always', ],
		'array-bracket-spacing': [ 'error', 'always', ],
		'computed-property-spacing': [ 'error', 'always', ],
		'vue/html-indent': [ 'error', 'tab', ],
		'vue/multi-word-component-names': [ 'off', ],
		'vue/component-name-in-template-casing': [ 'error', 'PascalCase', ],
	},
};
