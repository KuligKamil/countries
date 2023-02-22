<script setup lang="ts">
defineProps<{
  title: string
  mode: string
}>()
</script>

<template lang="pug">
div
    div {{ title }}
    div {{ mode }}
</template>
