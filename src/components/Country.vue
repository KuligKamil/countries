<script setup lang="ts">
const props = defineProps<{
  country: any
}>()
</script>

<template>
  <v-card class="mb-4" variant="tonal">
    <v-img :src="country.flags.svg" />
    <v-card-title>{{ country.name }}</v-card-title>
    <v-card-text>
      <div>Population: {{ country.population }}</div>
      <div>Region: {{ country.region }}</div>
      <div>Capital: {{ country.capital }}</div>
    </v-card-text>
  </v-card>
</template>
