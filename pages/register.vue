<template>
	<!-- Registration form-->
	<div class="section-sm section-last pb-0">
		<div class="container">
			<h6>Registration form</h6>
		</div>
		<section class="section section-md bg-primary-darker-2 section-decorated-16">
			<div class="decor-1">
				<NuxtImg src="bubbles-187x131.png" alt="" width="187" height="131" loading="lazy" />
			</div>
			<div class="decor-2">
				<NuxtImg src="bubbles-295x474.png" alt="" width="295" height="474" loading="lazy" />
			</div>
			<div class="decor-3">
				<NuxtImg src="forms-img-1-465x584.png" alt="" width="465" height="584" loading="lazy" />
			</div>
			<div class="container">
				<div class="box-1">
					<h4 class="text-white">
						Registration
					</h4>
					<form class="rd-form rd-form-small">
						<FormInputField
							v-model="formData.email"
							input-id="register-email"
							input-type="email"
							input-name="email"
							input-label="Email"
							required
							:v="v$.email"
						/>
						<FormInputField
							v-model="formData.password"
							input-id="register-password"
							input-type="password"
							input-name="password"
							input-label="Password"
							required
							:v="v$.password"
						/>
						<FormInputField
							v-model="formData.passwordConfirm"
							input-id="register-password-2"
							input-type="password"
							input-name="password-2"
							input-label="Confirm Password"
							required
							:v="v$.passwordConfirm"
						/>
						<div class="form-wrap">
							<button class="button button-block button-primary button-winona" type="submit">
								<WinonaContent>
									Create an Account
								</WinonaContent>
							</button>
						</div>
						<div class="form-wrap">
							<div class="text-decoration-lines">
								<span class="text-decoration-lines-content text-white">or enter with</span>
							</div>
						</div>
						<div class="form-wrap">
							<div class="button-group">
								<a class="button button-facebook button-icon button-icon-only button-winona" href="#" aria-label="Facebook">
									<WinonaContent>
										<span class="icon mdi mdi mdi-facebook" />
									</WinonaContent>
								</a>
								<a class="button button-twitter button-icon button-icon-only button-winona" href="#" aria-label="Twitter">
									<WinonaContent>
										<span class="icon mdi mdi-twitter" />
									</WinonaContent>
								</a>
								<a class="button button-google button-icon button-icon-only button-winona" href="#" aria-label="Google+">
									<WinonaContent>
										<span class="icon mdi mdi-google" />
									</WinonaContent>
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

interface FormData {
	email: string,
	password: string,
	passwordConfirm: string,
}

interface ValidationRules {
  email: {
    email: ReturnType<typeof helpers.withMessage>,
    required: ReturnType<typeof helpers.withMessage>,
  },
  password: {
    required: ReturnType<typeof helpers.withMessage>,
    minLength: ReturnType<typeof helpers.withMessage>,
  },
  passwordConfirm: {
    required: ReturnType<typeof helpers.withMessage>,
    sameAs: ReturnType<typeof helpers.withMessage>,
  },
}

const formData: FormData = reactive({
	email: '',
	password: '',
	passwordConfirm: '',
});

const rules = computed<ValidationRules>(() => {
	return {
		email: {
			email: helpers.withMessage('Invalid email format', email),
			required: helpers.withMessage('Email is required', required),
		},
		password: {
			required: helpers.withMessage('Password is required', required),
			minLength: helpers.withMessage('Password too short', minLength(8)),
		},
		passwordConfirm: {
			required: helpers.withMessage('Password confirmation is required', required),
			sameAs: helpers.withMessage('Passwords don\'t match', sameAs(formData.password)),
		},
	};
});

const v$ = useVuelidate(rules, formData, { $autoDirty: true, $lazy: true, });
</script>

<style scoped>

</style>
