<template>
  <div>
    <auth-reset-password-with-email
      :success="isSuccess"
      :loading="isLoading"
      :error-response="errorResponse"
      @go-to-login="onGoToLogin"
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

import AuthResetPasswordWithEmail from './components/AuthResetPasswordWithEmail.vue';
import AuthHelper from './components/AuthHelper.vue';


export default {
  name: 'view-auth-reset-password-with-email',
  components: {
    AuthResetPasswordWithEmail,
    AuthHelper,
  },
  data: () => ({
    isLoading: false,
    isSuccess: false,
    errorResponse: null,
  }),
  methods: {
    ...authStoreHelper.mapActions(['resetPasswordWithEmail']),

    onGoToLogin() {
      this.$router.push({ name: 'auth.login' });
    },
    async onSubmit(form) {
      this.isLoading = true;

      try {
        await this.resetPasswordWithEmail(form);
        this.isSuccess = true;
      } catch (e) {
        this.errorResponse = getMessage(e);
      }

      this.isLoading = false;
    },
  },
};
</script>
