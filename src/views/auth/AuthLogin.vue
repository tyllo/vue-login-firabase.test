<template>
  <div>
    <auth-login-form
      :loading="isLoading"
      @submit="onSubmit"
      @reset-password="onResetPassword"
    />

    <auth-helper
      text="Нет аккаунта?"
      :to="{ name: 'auth.logon' }"
      link-text="Зарегистрироваться"
    />
  </div>
</template>

<script>
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
    onResetPassword() {
      //
    },
    async onSubmit() {
      this.isLoading = true;
      await new Promise((resolve) => setTimeout(resolve, 1500));
      this.isLoading = false;
    },
  },
};
</script>
