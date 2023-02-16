<script setup lang="ts">
import { ref } from 'vue'
import Countries from './views/Countries.vue'

const loaded = ref(false)
const loading = ref(false)
const onClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}
</script>

<template>
  <header />

  <main>
    <v-text-field
      :loading="loading"
      density="compact"
      variant="solo"
      label="Search templates"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      @click:append-inner="onClick"
    />
    <br>
    <v-progress-circular
      indeterminate
      :size="100"
      :width="7"
    />

    <Countries />
  </main>
</template>
