<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CardSummary from '@/components/CardSummary.vue'
import FiltersSelect from '@/components/FiltersSelect.vue'
import SearchBar from '@/components/SearchBar.vue'
import TopMenu from '@/components/TopMenu.vue'
import { countriesStore } from '@/stores/countries'

const store = countriesStore()
const { loading, countries } = storeToRefs(store)
const { fetchData } = store
const filtersValue = ['Europe', 'Africa', 'America', 'Asia', 'Oceania']
fetchData()
</script>

<template>
  <div>
    <TopMenu title="Where in the world" mode="dark" />
    <SearchBar :loading="loading" />
    <FiltersSelect :items="filtersValue" />

    <br>
    <div v-if="loading">
      <v-progress-circular
        indeterminate
        :size="100"
        :width="7"
      />
    </div>
    <div v-else>
      <CardSummary
        v-for="country in countries"
        :key="country.name"
        :img="country.flags.svg"
        :title="country.name"
        :details="country.summary"
      />
    </div>
  </div>
</template>
