<template>
  <div>
    <auth-reset-password
      :loading="isLoading"
      :error-response="errorResponse"
      @submit="onSubmit"
    />

    <auth-helper
      text="Есть аккаунт?"
      :to="{ name: 'auth.login' }"
      link-text="Войти"
    />
  </div>
</template>

<script>
import { authStoreHelper } from './store';
import { getMessage } from '@/helpers/getMessage';

import AuthResetPassword from './components/AuthResetPassword.vue';
import AuthHelper from './components/AuthHelper.vue';


export default {
  name: 'view-auth-reset-password',
  components: {
    AuthResetPassword,
    AuthHelper,
  },
  props: {
    oobCode: String,
  },
  data: () => ({
    isLoading: false,
    isLoadingVerify: false,
    errorResponse: null,
  }),
  created() {
    const params = { oobCode: this.oobCode };
    this.onVerifyPasswordResetCode(params);
  },
  methods: {
    ...authStoreHelper.mapActions([
      'verifyPasswordResetCode',
      'confirmPasswordReset',
      'login',
    ]),

    async onVerifyPasswordResetCode(data) {
      this.isLoadingVerify = true;

      try {
        await this.verifyPasswordResetCode(data);
      } catch (e) {
        this.errorResponse = getMessage(e);
        const params = { errorResponse: this.errorResponse };
        this.$router.replace({ name: 'auth.reset-password', params });
      }

      this.isLoadingVerify = false;
    },
    async onSubmit(form) {
      this.isLoading = true;
      this.errorResponse = null;

      try {
        const resetParams = { oobCode: this.oobCode, password: form.password };
        const response = await this.confirmPasswordReset(resetParams);

        const loginParams = { email: response.email, password: form.password };
        await this.login(loginParams);

        this.$router.push({ name: 'home' });
      } catch (e) {
        this.errorResponse = getMessage(e);
      }

      this.isLoading = false;
    },
  },
};
</script>
