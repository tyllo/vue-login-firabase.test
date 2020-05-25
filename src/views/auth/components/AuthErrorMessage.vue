<template>
  <v-alert
    dense
    outlined
    x-small
    type="error"
    class="caption ma-0"
  >
    {{ message }}
  </v-alert>
</template>

<script>
import * as TYPES from '@/helpers/error-types';


const MESSAGES = {
  [TYPES.EMAIL_NOT_FOUND]: 'Пользователь не нашелся',
  [TYPES.INVALID_PASSWORD]: 'Неверный пароль',
  [TYPES.USER_DISABLED]: 'Пользователь заблокирован',
  [TYPES.CUSTOM_UNKNOWN_ERROR]: 'Что-то произошло, попытайтесь еще раз',
};

export default {
  name: 'auth-error-message',
  props: {
    type: String,
  },
  computed: {
    message() {
      const { type } = this;
      return MESSAGES[type] || MESSAGES[TYPES.CUSTOM_UNKNOWN_ERROR];
    },
  },
};
</script>
