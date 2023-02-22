<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <v-select
    label="Select"
    :items="items"
  />
</template>
