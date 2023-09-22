import AOS from 'aos';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.AOS = AOS.init({
		offset: 60,
		once: true,
	});
});
