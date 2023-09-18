<template>
	<div class="page">
		<!-- Navigation Bar -->
		<PageNavBar />

		<!-- Scroll to Top Button -->
		<UIToTopButton />

		<!-- Current Page -->
		<slot />

		<!-- Footer -->
		<PageFooter />
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
