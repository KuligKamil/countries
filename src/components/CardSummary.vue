<script setup lang="ts">
defineProps<{
  img: string
  title: string
  details: Map<string, string | undefined>
}>()
</script>

<template>
  <v-card class="mb-4" variant="tonal">
    <v-img :src="img" />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <div v-for="[key, value] of details" :key="key">
        {{ key }}: {{ value }}
      </div>
      <!-- <div>Population: {{ country.population }}</div> -->
      <!-- <div>Region: {{ country.region }}</div> -->
      <!-- <div>Capital: {{ country.capital }}</div> -->
    </v-card-text>
  </v-card>
</template>
