<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  text: string
  label: string
  loading: boolean
}>()
const emit = defineEmits<(event: 'update:text', text: string) => void>()
const searchText = ref('')
</script>

<template>
  <v-text-field
    v-model="searchText"
    :loading="loading"
    :label="label"
    prepend-inner-icon="mdi-magnify"
    single-line
    hide-details
    @update:model-value="emit('update:text', searchText)"
  />
</template>
