<template>
  <app-layout-default v-if="isAuthorized">
    <router-view />
  </app-layout-default>

  <app-layout-auth v-else>
    <router-view />
  </app-layout-auth>
</template>

<script>
import { mapGetters } from 'vuex';

import AppLayoutAuth from '@/components/layouts/AppLayoutAuth.vue';
import AppLayoutDefault from '@/components/layouts/AppLayoutDefault.vue';

export default {
  name: 'app',

  components: {
    AppLayoutAuth,
    AppLayoutDefault,
  },
  computed: {
    ...mapGetters(['isAuthorized']),
  },
};
</script>
