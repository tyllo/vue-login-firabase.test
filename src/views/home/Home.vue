<template>
  <v-layout style="height: 100%" class="d-flex justify-center align-center">
    <div class="text-center">
      <h2 class="mb-6">
        Добрый день, {{ profile.displayName || profile.email }}
      </h2>

      <p>
        Статус подтерждения:
        <br>
        <b
          v-if="profile.emailVerified"
          class="success--text"
          v-text="'подтвержден'"
        />

        <b
          v-else
          class="error--text"
          v-text="'не подтвержден'"
        />
      </p>
    </div>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'view-home',
  computed: {
    ...mapGetters(['profile']),
  },
};
</script>
