<template>
  <div>
    <auth-reset-password-form
      :loading="isLoading"
      @submit="onSubmit"
      @reset-password="onResetPassword"
    />

    <auth-helper
      text="Есть аккаунт?"
      :to="{ name: 'auth.login' }"
      link-text="Войти"
    />
  </div>
</template>

<script>
import AuthResetPasswordForm from './components/AuthResetPasswordForm.vue';
import AuthHelper from './components/AuthHelper.vue';


export default {
  name: 'view-auth-reset-passowrd',
  components: {
    AuthResetPasswordForm,
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
