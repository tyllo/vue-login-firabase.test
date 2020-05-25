<template>
  <v-card
    outlined
    class="d-flex flex-column"
    style="width: 400px; height: 480px;"
  >
    <v-card-title class="pb-0">
      {{ title }}
    </v-card-title>

    <v-card-subtitle class="my-0 py-0" style="min-height: 42px;">
      <auth-error-message
        v-if="errorResponse"
        :type="errorResponse"
      />
    </v-card-subtitle>

    <v-card-text class="pa-4">
      <slot />
    </v-card-text>

    <v-card-actions class="pa-4 mt-auto">
      <slot name="before-submit" />

      <v-spacer />

      <v-btn
        depressed
        class="px-4"
        color="primary"
        type="submit"
        :loading="loading"
        @click="$emit('submit')"
      >
        {{ submitText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AuthErrorMessage from './AuthErrorMessage.vue';


export default {
  name: 'auth-layout-form',
  components: {
    AuthErrorMessage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    submitText: {
      type: String,
      required: true,
    },
    loading: Boolean,
    errorResponse: null,
  },
};
</script>
