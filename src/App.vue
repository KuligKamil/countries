<script setup lang="ts">
import { ref } from "vue";

const loaded = ref(false);
const loading = ref(false);
const onClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};
</script>

<template>
  <header></header>

  <main class="d-flex justify-center">
    <v-text-field
      :loading="loading"
      density="compact"
      variant="solo"
      label="Search templates"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      @click:append-inner="onClick"
    ></v-text-field>
    <br />
    <v-progress-circular
      indeterminate
      :size="100"
      :width="7"
    ></v-progress-circular>
  </main>
</template>
