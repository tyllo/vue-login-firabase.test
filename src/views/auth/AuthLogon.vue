<template>
  <div>
    <auth-logon-form
      :loading="isLoading"
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

import AuthLogonForm from './components/AuthLogonForm.vue';
import AuthHelper from './components/AuthHelper.vue';


export default {
  name: 'view-auth-logon',
  components: {
    AuthLogonForm,
    AuthHelper,
  },
  data: () => ({
    isLoading: false,
    errorResponse: null,
  }),
  methods: {
    ...authStoreHelper.mapActions(['logon']),

    async onSubmit(form) {
      this.isLoading = true;
      this.errorResponse = null;

      try {
        await this.logon(form);
        this.$router.push({ name: 'home' });
      } catch (e) {
        this.errorResponse = getMessage(e);
      }

      this.isLoading = false;
    },
  },
};
</script>
