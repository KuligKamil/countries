<script setup lang="ts">
import { useRouter } from 'vue-router/auto'

const router = useRouter()
</script>

<template>
  <div>{{ $route.params.id }}</div>
</template>
