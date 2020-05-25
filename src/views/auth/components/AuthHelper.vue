<template>
  <small>
    {{ text }}
    <router-link
      :to="to"
      v-text="linkText"
    />
  </small>
</template>

<script>
export default {
  name: 'auth-helper',
  props: {
    text: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
    to: {
      type: Object,
      required: true,
    },
  },
};
</script>
