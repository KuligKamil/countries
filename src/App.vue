<script setup lang="ts">
// import Countries from './views/countries/index.vue'
import TopMenu from '@/components/TopMenu.vue'
</script>

<template>
  <!-- <main> -->
  <div>
    <TopMenu title="Where in the world" mode="dark" />
    <RouterView />
  </div>
  <!-- <Countries /> -->
  <!-- </main> -->
</template>
