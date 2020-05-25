<template>
  <v-layout style="height: 100%" class="d-flex justify-center align-center">
    <v-slide-x-transition leave-absolute>
      <!--  -->

      <router-view />

      <!--  -->
    </v-slide-x-transition>
  </v-layout>
</template>

<script>
export default {
  name: 'view-auth-layout',
};
</script>
