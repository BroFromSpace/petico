<template>
	<span ref="contentWrap">
		<slot />
	</span>
</template>

<script setup lang="ts">
const contentWrap = ref<HTMLElement | null>(null);

defineSlots<{default(): any}>();

onMounted(() => {
	if (contentWrap.value) {
		const originalDiv = document.createElement('div');
		originalDiv.className = 'content-original';

		const dubbedDiv = document.createElement('div');
		dubbedDiv.className = 'content-dubbed';

		contentWrap.value.childNodes.forEach((node: ChildNode) => {
			originalDiv.appendChild(node.cloneNode(true));
			dubbedDiv.appendChild(node.cloneNode(true));
		});

		contentWrap.value.replaceWith(originalDiv, dubbedDiv);
	}
});
</script>

<style scoped>

</style>
