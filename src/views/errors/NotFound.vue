<template>
  <v-layout style="height: 100%" class="d-flex justify-center align-center">
    <div class="text-center">
      <h2 class="mb-6">
        Страницы не существует
      </h2>

      <v-btn
        :to="{ name: 'home' }"
        color="primary"
      >
        Перейти на главную
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'view-errors-not-found',
};
</script>
