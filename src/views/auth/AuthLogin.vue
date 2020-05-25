<template>
  <div>
    <auth-login-form
      :loading="isLoading"
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
  }),
  methods: {
    ...authStoreHelper.mapActions(['login']),

    async onSubmit(form) {
      this.isLoading = true;

      try {
        await this.login(form);
        this.$router.push({ name: 'home' });
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }

      this.isLoading = false;
    },
  },
};
</script>
