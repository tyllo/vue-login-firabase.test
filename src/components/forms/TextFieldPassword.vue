<template>
  <v-text-field
    v-bind="$attrs"
    :value="value"
    :append-icon="icon"
    :type="type"
    v-on="$listeners || {}"
    @click:append="isHidden = !isHidden"
  >
    <template v-for="(_, key) in $scopedSlots" #[key]="props">
      <slot v-bind="props" :name="key" />
    </template>

    <template v-for="(_, key) in $slots" #[key]>
      <slot :name="key" />
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: 'text-field-password',
  inheritAttrs: false,
  props: {
    value: String,
  },
  data: () => ({
    isHidden: true,
  }),
  computed: {
    icon() {
      if (!this.value) return void 0;
      return this.isHidden ? 'mdi-eye-off' : 'mdi-eye';
    },
    type() {
      return this.isHidden ? 'password' : 'text';
    },
  },
};
</script>
