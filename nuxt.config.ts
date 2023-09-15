// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/image',
		'@nuxtjs/eslint-module',
		'@vue-macros/nuxt',
		'@nuxtjs/html-validator',
		'magic-regexp/nuxt',
	],
	devtools: { enabled: true, },
	app: {
		head: {
			script: [
				{ src: '/js/core.min.js', type: 'text/javascrip', tagPosition: 'bodyClose', },
				{ src: '/js/script.js', type: 'text/javascrip', tagPosition: 'bodyClose', },
			],
		},
	},
	css: [
		'~/assets/scss/custom/style.scss',
	],
	plugins: [
		{ src: '~/plugins/bootstrap.ts', mode: 'client', },
	],
	image: {
		dir: 'assets/images',
		quality: 100,
	},
});
