<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Country from '@/components/Country.vue'
import { countriesStore } from '@/stores/countries'

const { countries } = storeToRefs(countriesStore())
console.log(countries)
</script>

<template>
  <div>
    Countries:
    <Country
      v-for="country in countries"
      :key="country.name"
      :country="country"
    />
  </div>
</template>
