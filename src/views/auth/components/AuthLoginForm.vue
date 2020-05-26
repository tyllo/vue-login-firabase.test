<template>
  <v-form ref="form" @submit.prevent="onSubmit">
    <auth-layout-form
      title="Войти"
      submit-text="Войти"
      :loading="loading"
      :error-response="errorResponse"
    >
      <v-text-field
        v-model="form.email"
        :rules="[rules.required, rules.email]"
        label="Адрес эл. почты"
        name="email"
        outlined
        autofocus
      />

      <text-field-password
        v-model="form.password"
        :rules="[rules.required, rules.min, rules.password]"
        label="Пароль"
        hint="Не менее 8 символов"
        name="password"
        outlined
      />

      <template #before-submit>
        <v-btn
          :to="toResetRoute"
          depressed text small
          color="secondary"
          type="buttom"
        >
          Забыли пароль?
        </v-btn>
      </template>
    </auth-layout-form>
  </v-form>
</template>

<script>
import * as rules from '@/helpers/validation-rules';

import AuthLayoutForm from './AuthLayoutForm.vue';
import TextFieldPassword from '@/components/forms/TextFieldPassword.vue';


const createDefaultData = () => ({
  email: '',
  password: '',
  password_repeat: '',
});

export default {
  name: 'auth-login-form',
  components: {
    AuthLayoutForm,
    TextFieldPassword,
  },
  props: {
    loading: Boolean,
    errorResponse: null,
  },
  data: () => ({
    form: createDefaultData(),
    rules,
  }),
  computed: {
    toResetRoute() {
      return {
        name: 'auth.reset-password',
        params: { email: this.form.email },
      };
    },
  },
  methods: {
    onSubmit() {
      const isValid = this.$refs.form.validate();
      if (!isValid) {
        return;
      }

      this.$emit('submit', this.form);
    },
  },
};
</script>
