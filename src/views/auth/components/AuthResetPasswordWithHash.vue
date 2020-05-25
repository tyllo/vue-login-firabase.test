<template>
  <auth-layout-form
    title="Задать новый пароль"
    :submit-text="'Задать'"
    :loading="loading"
    :error-response="errorResponse"
    @submit="onSubmit"
  >
    <v-form ref="form">
      <text-field-password
        v-model="form.password"
        :rules="[rules.required]"
        label="Текущий пароль"
        name="password"
        outlined
      />

      <text-field-password
        v-model="form.password_new"
        :rules="[rules.required, rules.min, rules.password]"
        label="Новый пароль"
        hint="Не менее 8 символов"
        name="password_new"
        outlined
      />

      <text-field-password
        v-model="form.password_new_repeat"
        :rules="[passwordRepeatCheck]"
        label="Повторите новый пароль"
        name="password_new_repeat"
        outlined
      />
    </v-form>
  </auth-layout-form>
</template>

<script>
import * as rules from '@/helpers/validation-rules';

import TextFieldPassword from '@/components/forms/TextFieldPassword.vue';
import AuthLayoutForm from './AuthLayoutForm.vue';


const createDefaultData = () => ({
  password: '',
  password_new: '',
  password_new_repeat: '',
});

export default {
  name: 'auth-reset-password-with-hash',
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
