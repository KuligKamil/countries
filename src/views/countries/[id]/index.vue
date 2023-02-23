<script setup lang="ts">
import TopMenu from '@/components/TopMenu.vue'
import CardDetails from '@/components/CardDetails.vue'
</script>

<template>
  <div>
    <TopMenu title="Where in the world" mode="dark" />
    <v-container>
      <v-row>
        <v-col cols="12">
          <CardDetails />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
