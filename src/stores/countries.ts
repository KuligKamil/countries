import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { RootObject } from './models'
import { useFetch } from '@/composables/fetch'

export const countriesStore = defineStore('countries', () => {
  const { execute: fetchData, data: allCountries, loading } = useFetch({
    url: 'countries',
    mapResponse: (countries: RootObject[]) => countries.map(country => ({
      ...country,
      summary: new Map<string, string | undefined>([
        ['Population', country.population.toString()],
        ['Region', country.region],
        ['Capital', country.capital],
      ]),
    })),
  })

  const countries = computed(() => {
    // return allJobs.value?.filter(({ tags }) => filters.value.every(filter => tags.includes(filter)));
    return allCountries.value
  })

  return { countries, fetchData, loading }
  // const filters = ref(countries.value.map(country => country.region))
  // console.log(countries)
})
