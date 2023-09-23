<template>
	<section class="section section-lg text-center">
		<div class="container">
			<h3 class="aos-outer">
				<span class="aos" data-aos="slide-in-down">Testimonials</span>
			</h3>
			<Swiper
				:modules="[SwiperPagination]"
				:loop="false"
				:autoplay="false"
				:breakpoints="{
					576: {
						slidesPerView: 1,
						slidesPerGroup: 1,
					},
					768: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
					992: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					}
				}"
				:simulate-touch="false"
				:centered-slides="false"
				:space-between="30"
				:pagination="{
					el: '.swiper-pagination-simple',
					clickable: true,
				}"
				class="aos swiper-container swiper-slider"
				data-aos="fade-in"
			>
				<SwiperSlide>
					<blockquote class="quote-classic">
						<div class="quote-classic-meta">
							<div class="quote-classic-avatar">
								<NuxtImg src="testimonials-person-1-96x96.jpg" alt="" width="96" height="96" loading="lazy" />
							</div>
							<div class="quote-classic-info">
								<cite class="quote-classic-cite">Kelly McMillan</cite>
								<p class="quote-classic-caption">
									Regular Client
								</p>
							</div>
						</div>
						<div class="quote-classic-text">
							<p>My dog is 10 this year. She has been going to this grooming salon every day for the past five years. Thanks to the care and special shampoos used at SpaDog, she is now in very good health again.</p>
						</div>
					</blockquote>
				</SwiperSlide>
				<SwiperSlide>
					<blockquote class="quote-classic">
						<div class="quote-classic-meta">
							<div class="quote-classic-avatar">
								<NuxtImg src="testimonials-person-2-96x96.jpg" alt="" width="96" height="96" loading="lazy" />
							</div>
							<div class="quote-classic-info">
								<cite class="quote-classic-cite">Harold Barnett</cite>
								<p class="quote-classic-caption">
									Regular Client
								</p>
							</div>
						</div>
						<div class="quote-classic-text">
							<p>I bring my Westie “Dougie” to SpaDog for the past 4 years. Their groomers are fantastic, always do an amazing job and are always so nice and cheerful. Would recommend them to every dog owner!</p>
						</div>
					</blockquote>
				</SwiperSlide>
				<SwiperSlide>
					<blockquote class="quote-classic">
						<div class="quote-classic-meta">
							<div class="quote-classic-avatar">
								<NuxtImg src="testimonials-person-3-96x96.jpg" alt="" width="96" height="96" loading="lazy" />
							</div>
							<div class="quote-classic-info">
								<cite class="quote-classic-cite">Albert Webb</cite>
								<p class="quote-classic-caption">
									Regular Client
								</p>
							</div>
						</div>
						<div class="quote-classic-text">
							<p>My Yorkie ‘Toby’ has been coming to this grooming studio for over 8 years and always looks beautiful afterward. Having tried other grooming salons before, I wouldn’t bring him anywhere else.</p>
						</div>
					</blockquote>
				</SwiperSlide>
				<SwiperSlide>
					<blockquote class="quote-classic">
						<div class="quote-classic-meta">
							<div class="quote-classic-avatar">
								<NuxtImg src="testimonials-person-4-96x96.jpg" alt="" width="96" height="96" loading="lazy" />
							</div>
							<div class="quote-classic-info">
								<cite class="quote-classic-cite">Samantha Lee</cite>
								<p class="quote-classic-caption">
									Regular Client
								</p>
							</div>
						</div>
						<div class="quote-classic-text">
							<p>I really feel comfortable leaving my Max at SpaDog. He always comes homes happy and relaxed and the groomers there are warm, friendly and welcoming. They always do what you ask.</p>
						</div>
					</blockquote>
				</SwiperSlide>
				<SwiperSlide>
					<blockquote class="quote-classic">
						<div class="quote-classic-meta">
							<div class="quote-classic-avatar">
								<NuxtImg src="testimonials-person-5-96x96.jpg" alt="" width="96" height="96" loading="lazy" />
							</div>
							<div class="quote-classic-info">
								<cite class="quote-classic-cite">Bill Warner</cite>
								<p class="quote-classic-caption">
									Regular Client
								</p>
							</div>
						</div>
						<div class="quote-classic-text">
							<p>We are in the area for a few months and my 2 furry boys needed grooming. SpaDog team was very friendly and the boys liked it there. They did not have to spend a lot of time there like so many places.</p>
						</div>
					</blockquote>
				</SwiperSlide>
				<SwiperSlide>
					<blockquote class="quote-classic">
						<div class="quote-classic-meta">
							<div class="quote-classic-avatar">
								<NuxtImg src="testimonials-person-6-96x96.jpg" alt="" width="96" height="96" loading="lazy" />
							</div>
							<div class="quote-classic-info">
								<cite class="quote-classic-cite">Adam Smith</cite>
								<p class="quote-classic-caption">
									Regular Client
								</p>
							</div>
						</div>
						<div class="quote-classic-text">
							<p>Thank you for making my dog look so fantastic! He was a smelly matted mess and now he looks so handsome! I will surely recommend your grooming salon to my friends and colleagues.</p>
						</div>
					</blockquote>
				</SwiperSlide>
				<div class="swiper-pagination-simple" />
			</Swiper>

		</div>
	</section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
