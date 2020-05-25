<template>
  <auth-layout-form
    title="Сбросить пароль"
    :submit-text="success ? 'Вернуться' : 'Сбросить'"
    :loading="loading"
    @submit="onSubmit"
  >
    <v-form ref="form">
      <v-text-field
        v-model="form.username"
        :rules="[rules.required, rules.email]"
        :disabled="success"
        label="Адрес эл. почты"
        name="username"
        outlined
      />
    </v-form>

    <div v-if="success">
      Пароль сброшен, проверьте свою почту
    </div>
  </auth-layout-form>
</template>

<script>
import * as rules from '@/helpers/validation-rules';

import AuthLayoutForm from './AuthLayoutForm.vue';


const createDefaultData = () => ({
  username: '',
});

export default {
  name: 'auth-reset-password-with-email',
  components: {
    AuthLayoutForm,
  },
  props: {
    success: Boolean,
    loading: Boolean,
  },
  data: () => ({
    form: createDefaultData(),
    rules,
  }),
  methods: {
    onSubmit() {
      if (this.success) {
        this.$emit('go-to-login');
        return;
      }

      const isValid = this.$refs.form.validate();
      if (!isValid) {
        return;
      }

      this.$emit('submit', this.form);
    },
  },
};
</script>
