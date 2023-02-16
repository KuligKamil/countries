<script setup lang="ts">
const props = defineProps<{
  country: any;
}>();
</script>
<template>
  <div>{{ country.name }}</div>
</template>
