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
  }),
  methods: {
    async onSubmit() {
      this.isLoading = true;
      await new Promise((resolve) => setTimeout(resolve, 1500));
      this.isLoading = false;
    },
  },
};
</script>
