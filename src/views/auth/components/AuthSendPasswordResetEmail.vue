<template>
  <v-form ref="form" @submit.prevent="onSubmit">
    <auth-layout-form
      title="Сбросить пароль"
      :submit-text="success ? 'Вернуться' : 'Сбросить'"
      :loading="loading"
      :error-response="errorResponse"
    >
      <v-text-field
        v-model="form.email"
        :rules="[rules.required, rules.email]"
        :disabled="success"
        label="Адрес эл. почты"
        name="email"
        type="email"
        outlined
        autofocus
      />

      <div v-if="success">
        Пароль сброшен, проверьте свою почту
      </div>
    </auth-layout-form>
  </v-form>
</template>

<script>
import * as rules from '@/helpers/validation-rules';

import AuthLayoutForm from './AuthLayoutForm.vue';


const createDefaultData = () => ({
  email: '',
});

export default {
  name: 'auth-send-password-reset-email',
  components: {
    AuthLayoutForm,
  },
  props: {
    success: Boolean,
    loading: Boolean,
    errorResponse: String,
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
