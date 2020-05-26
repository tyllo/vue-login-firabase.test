<template>
  <div>
    <auth-send-password-reset-email
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

import AuthSendPasswordResetEmail from './components/AuthSendPasswordResetEmail.vue';
import AuthHelper from './components/AuthHelper.vue';


export default {
  name: 'view-auth-send-password-reset-email',
  components: {
    AuthSendPasswordResetEmail,
    AuthHelper,
  },
  inheritAttrs: false,
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      errorResponse: this.$attrs.errorResponse,
    };
  },
  methods: {
    ...authStoreHelper.mapActions(['sendPasswordResetEmail']),

    onGoToLogin() {
      this.$router.push({ name: 'auth.login' });
    },
    async onSubmit(form) {
      this.isLoading = true;
      this.errorResponse = null;

      try {
        await this.sendPasswordResetEmail(form);
        this.isSuccess = true;
      } catch (e) {
        this.errorResponse = getMessage(e);
      }

      this.isLoading = false;
    },
  },
};
</script>
