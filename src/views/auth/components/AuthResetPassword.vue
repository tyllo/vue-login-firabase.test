<template>
  <v-form ref="form" @submit.prevent="onSubmit">
    <auth-layout-form
      title="Задать новый пароль"
      :submit-text="'Задать'"
      :loading="loading"
      :error-response="errorResponse"
    >
      <text-field-password
        v-model="form.password"
        :rules="[rules.required, rules.min, rules.password]"
        label="Новый пароль"
        hint="Не менее 8 символов"
        name="password"
        outlined
        autofocus
      />

      <text-field-password
        v-model="form.password_repeat"
        :rules="[passwordRepeatCheck]"
        label="Повторите новый пароль"
        name="password_repeat"
        outlined
      />
    </auth-layout-form>
  </v-form>
</template>

<script>
import * as rules from '@/helpers/validation-rules';

import TextFieldPassword from '@/components/forms/TextFieldPassword.vue';
import AuthLayoutForm from './AuthLayoutForm.vue';


const createDefaultData = () => ({
  password: '',
  password_repeat: '',
});

export default {
  name: 'auth-reset-password',
  components: {
    TextFieldPassword,
    AuthLayoutForm,
  },
  props: {
    loading: Boolean,
    errorResponse: null,
  },
  data: () => ({
    form: createDefaultData(),
    rules,
  }),
  methods: {
    passwordRepeatCheck() {
      const { form } = this;
      return rules.password_repeat(form.password, form.password_repeat);
    },
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
