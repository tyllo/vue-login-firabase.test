<template>
  <v-overlay :value="true" absolute>
    <div class="d-flex flex-column align-center">
      <v-progress-circular
        :size="50"
        indeterminate
      />

      <div>Верификация email</div>
    </div>
  </v-overlay>
</template>

<script>
import { mapGetters } from 'vuex';
import { authStoreHelper } from './store';


export default {
  name: 'view-auth-verify-email',
  props: {
    oobCode: String,
  },
  data: () => ({
    isLoading: true,
  }),
  computed: {
    ...mapGetters(['profile']),
  },
  created() {
    const { oobCode } = this;

    if (this.profile.emailVerified) {
      this.$router.push({ name: 'home' });
    } else {
      this.onConfirmEmailVerification(oobCode);
    }
  },
  methods: {
    ...authStoreHelper.mapActions(['confirmEmailVerification']),

    async onConfirmEmailVerification(oobCode) {
      try {
        await this.confirmEmailVerification({ oobCode });
        this.$router.push({ name: 'home' });
      } catch (e) {
        //
      }
    },
  },
};
</script>
