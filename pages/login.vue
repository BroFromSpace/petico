<template>
	<div>
		<BreadcrumbContainer>
			<template #title>
				Login
			</template>
			<template #path>
				<BreadcrumbItem>
					<NuxtLink to="/">
						Home
					</NuxtLink>
				</BreadcrumbItem>
				<BreadcrumbItem active>
					Login
				</BreadcrumbItem>
			</template>
		</BreadcrumbContainer>

		<div class="section-sm">
			<div class="container">
				<h6>Login form</h6>
			</div>
			<section class="section section-md bg-primary-darker-2 section-decorated-15">
				<div class="decor-1">
					<NuxtImg src="bubbles-201x215.png" alt="" width="201" height="215" loading="lazy" />
				</div>
				<div class="decor-2">
					<NuxtImg src="bubbles-187x131.png" alt="" width="187" height="131" loading="lazy" />
				</div>
				<div class="decor-3">
					<NuxtImg src="home-3-359x546.png" alt="" width="359" height="546" loading="lazy" />
				</div>
				<div class="container">
					<div class="box-1">
						<h4 class="text-white">
							Sign In
						</h4>
						<form class="rd-form rd-form-small">
							<FormInputField
								v-model.trim="formData.email"
								input-id="register-email"
								input-type="email"
								input-name="email"
								required
								:v="v$.email"
							>
								Email
							</FormInputField>
							<FormInputField
								v-model.trim="formData.password"
								input-id="register-password"
								input-type="password"
								input-name="password"
								required
								:v="v$.password"
							>
								Password
							</FormInputField>
							<div class="form-wrap">
								<button class="button button-primary button-winona" type="submit">
									<WinonaContent>
										Sign in
									</WinonaContent>
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

interface FormData {
	email: string,
	password: string,
}

interface ValidationRules {
  email: {
    email: ReturnType<typeof helpers.withMessage>,
		required: ReturnType<typeof helpers.withMessage>,
  },
  password: {
    required: ReturnType<typeof helpers.withMessage>,
  },
}

const formData: FormData = reactive({
	email: '',
	password: '',
});

const rules = computed<ValidationRules>(() => {
	return {
		email: {
			email: helpers.withMessage('Invalid email format', email),
			required: helpers.withMessage('Email is required', required),
		},
		password: {
			required: helpers.withMessage('Password is required', required),
		},
	};
});

const v$ = useVuelidate(rules, formData, { $autoDirty: true, $lazy: true, });
</script>

<style scoped>

</style>
