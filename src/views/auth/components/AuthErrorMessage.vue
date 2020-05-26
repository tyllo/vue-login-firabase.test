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
  [TYPES.INVALID_OOB_CODE]: 'Неверный код, запросите еще раз',
  [TYPES.EXPIRED_OOB_CODE]: 'Код просрочен, запросите еще раз',
  [TYPES.TOO_MANY_ATTEMPTS_TRY_LATER]: 'Слишком много попыток, попробуйте позже',
  [TYPES.EMAIL_EXISTS]: 'Пользователь с таким email зарегистрирован',
};

export default {
  name: 'auth-error-message',
  props: {
    type: String,
  },
  computed: {
    message() {
      const { type } = this;
      if (!type) return MESSAGES[TYPES.CUSTOM_UNKNOWN_ERROR];
      return MESSAGES[type] || `Ощибка: ${type}`;
    },
  },
};
</script>
