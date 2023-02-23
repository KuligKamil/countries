<script setup lang="ts">
defineProps<{
  area: number
  img: string
  title: string
  details: Map<string, string | undefined>
}>()

const emit = defineEmits<(event: 'click:card', area: number) => void>()
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
    <v-card-actions>
      <v-btn flat @click="emit('click:card', area)">
        more details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
