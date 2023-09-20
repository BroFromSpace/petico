import AOS from 'aos';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.AOS = AOS.init({
		once: true,
	});
});
