<template>
  <div>
    <auth-login-form
      :loading="isLoading"
      :error-response="errorResponse"
      @submit="onSubmit"
    />

    <auth-helper
      text="Нет аккаунта?"
      :to="{ name: 'auth.logon' }"
      link-text="Зарегистрироваться"
    />
  </div>
</template>

<script>
import { authStoreHelper } from './store';
import { getMessage } from '@/helpers/getMessage';

import AuthLoginForm from './components/AuthLoginForm.vue';
import AuthHelper from './components/AuthHelper.vue';


export default {
  name: 'view-auth-login',
  components: {
    AuthLoginForm,
    AuthHelper,
  },
  data: () => ({
    isLoading: false,
    errorResponse: null,
  }),
  methods: {
    ...authStoreHelper.mapActions(['login']),

    async onSubmit(form) {
      this.isLoading = true;
      this.errorResponse = null;

      try {
        await this.login(form);
        this.$router.push({ name: 'home' });
      } catch (e) {
        this.errorResponse = getMessage(e);
      }

      this.isLoading = false;
    },
  },
};
</script>
