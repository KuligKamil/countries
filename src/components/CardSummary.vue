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
    <v-card-title class="font-weight-bold">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div v-for="[key, value] of details" :key="key">
        <div v-show="value">
          <span class="font-weight-bold">{{ key }}:</span> {{ value }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
