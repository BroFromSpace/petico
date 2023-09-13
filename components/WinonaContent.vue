<template>
	<span ref="contentWrap">
		<slot />
	</span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const contentWrap = ref<HTMLElement | null>(null);

onMounted(() => {
	if (contentWrap.value) {
		const originalDiv = document.createElement('div');
		originalDiv.className = 'content-original';

		const dubbedDiv = document.createElement('div');
		dubbedDiv.className = 'content-dubbed';

		contentWrap.value.childNodes.forEach((node) => {
			originalDiv.appendChild(node.cloneNode(true));
			dubbedDiv.appendChild(node.cloneNode(true));
		});

		contentWrap.value?.replaceWith(originalDiv, dubbedDiv);
	}
});
</script>

<style scoped>

</style>
