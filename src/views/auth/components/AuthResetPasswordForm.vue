<template>
  <auth-layout-form
    title="Сбросить пароль"
    submit-text="Сбросить"
    :loading="loading"
    @submit="onSubmit"
  >
    <v-form ref="form">
      <v-text-field
        v-model="form.username"
        :rules="[rules.required, rules.email]"
        label="Адрес эл. почты"
        name="username"
        outlined
      />
    </v-form>
  </auth-layout-form>
</template>

<script>
import * as rules from '@/helpers/validation-rules';

import AuthLayoutForm from './AuthLayoutForm.vue';


const createDefaultData = () => ({
  username: '',
});

export default {
  name: 'auth-reset-password-form',
  components: {
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
