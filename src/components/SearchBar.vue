<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
// const onClick = () => {
//   loading.value = true
//   setTimeout(() => {
//     loading.value = false
//     loaded.value = true
//   }, 2000)
// }
</script>

<template>
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
</template>
