<template>
	<div class="form-wrap" :class="{'has-error': v.$error}">
		<input
			:id="inputId"
			class="form-input"
			:type="inputType"
			:name="inputName"
			@input="modifyModelValue"
			@focus="changeFocus(true)"
			@blur="changeFocus(false)"
		>
		<Transition>
			<span v-if="v.$error" class="form-validation">
				{{ v.$errors[0].$message }}
			</span>
		</Transition>
		<label class="form-label" :class="{focus: hasFocus, 'auto-fill': autoFilled, 'not-empty': !!modelValue}" :for="inputId">{{ inputLabel }}</label>
	</div>
</template>

<script setup lang="ts">
interface Props {
	inputId: string,
	inputType: string,
	inputName: string,
	inputLabel: string,
	required?: boolean,
	v: Readonly<{ [key: string]: any }>,
}

type ChangeFocus = (value: boolean) => void;
type ModifyModelValue = (event: Event) => void;

const hasFocus = ref(false);
const autoFilled = ref(false);

defineEmits<{ 'update:modelValue': [value: string] }>();

const { inputId, inputType, inputName, inputLabel, } = definePropsRefs<Props>();
const { modelValue, } = defineModels<{ modelValue: string }>();

const changeFocus: ChangeFocus = (value) => {
	hasFocus.value = value;
};

const modifyModelValue: ModifyModelValue = (event) => {
	modelValue.value = (event.target as HTMLInputElement).value;

	autoFilled.value = window.getComputedStyle(event.target as HTMLInputElement, ':-webkit-autofill').length > 0;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: scale3d(1, 1, 1);
}

.v-enter-from,
.v-leave-to {
  transform: scale3d(1, 0, 1);
}
</style>
