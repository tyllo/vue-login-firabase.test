<template>
  <app-layout-default v-if="isAuthorized" @logout="onLogout">
    <template v-if="isLoadingProfile">
      <v-overlay :value="true" absolute>
        <v-progress-circular
          :size="50"
          indeterminate
        />
      </v-overlay>
    </template>

    <router-view
      v-else
    />
  </app-layout-default>

  <app-layout-auth v-else>
    <router-view />
  </app-layout-auth>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import AppLayoutAuth from '@/components/layouts/AppLayoutAuth.vue';
import AppLayoutDefault from '@/components/layouts/AppLayoutDefault.vue';

export default {
  name: 'app',

  components: {
    AppLayoutAuth,
    AppLayoutDefault,
  },
  data: () => ({
    isLoadingProfile: false,
  }),
  computed: {
    ...mapGetters(['isAuthorized']),
  },
  watch: {
    isAuthorized: {
      immediate: true,
      handler: 'onAuthorized',
    },
  },
  methods: {
    ...mapActions(['getProfile', 'logout']),

    async onAuthorized() {
      const { isAuthorized } = this;
      if (!isAuthorized) return;

      this.isLoadingProfile = true;
      try {
        await this.getProfile();
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }
      this.isLoadingProfile = false;
    },
    async onLogout() {
      await this.logout();
      this.$router.push({ name: 'auth.login' });
    },
  },
};
</script>
