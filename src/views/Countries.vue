<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CardSummary from '@/components/CardSummary.vue'
import FiltersSelect from '@/components/FiltersSelect.vue'
import SearchBar from '@/components/SearchBar.vue'
import TopMenu from '@/components/TopMenu.vue'
import { countriesStore } from '@/stores/countries'

const store = countriesStore()
const { loading, countries, filterText } = storeToRefs(store)
const { fetchData, filterData } = store
const filtersValue = ['Europe', 'Africa', 'Americas', 'Asia', 'Oceania']
fetchData()
</script>

<template>
  <div>
    <TopMenu title="Where in the world" mode="dark" />
    <v-container>
      <v-row>
        <v-col cols="12">
          <SearchBar
            :text="filterText"
            label="Search for a country..."
            :loading="loading"
            @update:text="filterText = $event"
          />
        </v-col>
        <v-col cols="6">
          <FiltersSelect
            label="Filter by Region"
            :items="filtersValue"
            @select:filter="filterData"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
