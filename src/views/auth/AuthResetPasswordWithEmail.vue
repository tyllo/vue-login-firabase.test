<template>
  <div>
    <auth-reset-password-with-email
      :success="isSuccess"
      :loading="isLoading"
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
        // eslint-disable-next-line
        console.log(e);
      }

      this.isLoading = false;
    },
  },
};
</script>
