<template>
  <div>
    <auth-reset-password-with-hash
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

import AuthResetPasswordWithHash from './components/AuthResetPasswordWithHash.vue';
import AuthHelper from './components/AuthHelper.vue';


export default {
  name: 'view-auth-reset-password-with-hash',
  components: {
    AuthResetPasswordWithHash,
    AuthHelper,
  },
  data: () => ({
    isLoading: false,
    errorResponse: null,
  }),
  methods: {
    ...authStoreHelper.mapActions(['resetPasswordWithHash']),

    async onSubmit(form) {
      this.isLoading = true;

      try {
        await this.resetPasswordWithHash(form);
        this.$router.push({ name: 'home' });
      } catch (e) {
        this.errorResponse = getMessage(e);
      }

      this.isLoading = false;
    },
  },
};
</script>
