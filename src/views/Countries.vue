<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import Country from '@/components/Country.vue'
import FiltersSelect from '@/components/FiltersSelect.vue'
import SearchBar from '@/components/SearchBar.vue'
import TopMenu from '@/components/TopMenu.vue'
import { countriesStore } from '@/stores/countries'

const { countries } = storeToRefs(countriesStore())
const filtersValue = ['Europe', 'Africa', 'America', 'Asia', 'Oceania']
const loading = ref(false)

// console.log(countries)
</script>

<template>
  <div>
    <TopMenu title="Where in the world" mode="dark" />
    <SearchBar :loading="loading" />
    <FiltersSelect :items="filtersValue" />

    <br>
    <v-progress-circular
      indeterminate
      :size="100"
      :width="7"
    />
    <Country
      v-for="country in countries"
      :key="country.name"
      :country="country"
    />
  </div>
</template>
