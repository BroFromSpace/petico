<template>
	<Swiper
		:modules="[SwiperPagination, SwiperEffectFade]"
		:speed="600"
		effect="fade"
		:loop="false"
		:autoplay="false"
		:slides-per-view="1"
		:simulate-touch="false"
		:centered-slides="false"
		:pagination="{
			el: '.swiper-pagination-modern',
			clickable: true,
			horizontalClass: undefined,
			renderBullet: renderBullet,
		}"
		:fade-effect="{
			crossFade: true,
		}"
		class="swiper-container swiper-slider swiper-slider-light bg-image-1"
		data-custom-slide-effect="inter-leave-effect"
	>
		<SwiperSlide>
			<div class="slide-inner">
				<div class="container">
					<div class="swiper-slide-caption">
						<div class="row row-30">
							<div class="col-lg-6 text-center text-lg-left">
								<h1><span class="font-weight-light"><span>Make Your Dogs</span></span><span class="font-weight-bold"><span>Look Their Best</span></span></h1>
								<div class="button-outer">
									<a class="button button-lg button-primary button-winona" href="#">
										<WinonaContent>Free consultation</WinonaContent>
									</a>
								</div>
							</div>
							<div class="col-lg-6 position-static">
								<div class="floating-image home--swiper-slide-bg-1" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div class="slide-inner">
				<div class="container">
					<div class="swiper-slide-caption">
						<div class="row row-30">
							<div class="col-lg-6 text-center text-lg-left">
								<h1><span class="font-weight-light"><span>Royal Services</span></span><span class="font-weight-bold"><span>For Your Dog</span></span></h1>
								<div class="button-outer">
									<a class="button button-lg button-primary button-winona" href="#">
										<WinonaContent>Free consultation</WinonaContent>
									</a>
								</div>
							</div>
							<div class="col-lg-6 position-static">
								<div class="floating-image home--swiper-slide-bg-2" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div class="slide-inner">
				<div class="container">
					<div class="swiper-slide-caption">
						<div class="row row-30">
							<div class="col-lg-6 text-center text-lg-left">
								<h1><span class="font-weight-light"><span>Exceptional</span></span><span class="font-weight-bold"><span>Dog Grooming</span></span></h1>
								<div class="button-outer">
									<a class="button button-lg button-primary button-winona" href="#">
										<WinonaContent>Free consultation</WinonaContent>
									</a>
								</div>
							</div>
							<div class="col-lg-6 position-static">
								<div class="floating-image home--swiper-slide-bg-3" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</SwiperSlide>
		<div ref="swiperPaginationContainer" class="swiper-pagination-outer container">
			<div class="swiper-pagination swiper-pagination-modern swiper-pagination-marked" />
		</div>
	</Swiper>
</template>

<script setup lang="ts">
const swiperPaginationContainer = ref<HTMLElement | null>(null);

const renderBullet = (index: number, className: string) => {
	return '<span class="' + className + '">' + ((index + 1) < 10 ? ('0' + (index + 1)) : (index + 1)) + '</span>';
};

onMounted(() => {
	const paginationMark = document.createElement('span');
	paginationMark.classList.add('swiper-pagination-mark');

	swiperPaginationContainer.value?.lastChild?.appendChild(paginationMark);
});
</script>

<style scoped>

</style>
