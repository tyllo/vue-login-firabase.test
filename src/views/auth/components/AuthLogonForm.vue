<template>
  <auth-layout-form
    title="Зарегистрироваться"
    submit-text="Создать"
    :loading="loading"
    @submit="onSubmit"
  >
    <!--  -->

    <v-form ref="form">
      <v-text-field
        v-model="form.username"
        :rules="[rules.required, rules.email]"
        label="Адрес эл. почты"
        name="username"
        outlined
      />

      <text-field-password
        v-model="form.password"
        :rules="[rules.required, rules.min]"
        label="Пароль"
        hint="Не менее 8 символов"
        name="password"
        outlined
      />

      <text-field-password
        v-model="form.password_repeat"
        :rules="[passwordRepeatCheck]"
        label="Повторите пароль"
        name="password_repeat"
        outlined
      />
    </v-form>

    <!--  -->
  </auth-layout-form>
</template>

<script>
import * as rules from '@/helpers/validation-rules';

import TextFieldPassword from '@/components/forms/TextFieldPassword.vue';
import AuthLayoutForm from './AuthLayoutForm.vue';


const createDefaultData = () => ({
  username: '',
  password: '',
  password_repeat: '',
});

export default {
  name: 'auth-logon-form',
  components: {
    TextFieldPassword,
    AuthLayoutForm,
  },
  props: {
    loading: Boolean,
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
