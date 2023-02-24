import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { RootObject } from './models'
import { useFetch } from '@/composables/fetch'

export const countriesStore = defineStore('countries', () => {
  const { execute: fetchData, data: allCountries, loading } = useFetch({
    url: 'countries',
    mapResponse: (countries: RootObject[]) => countries.map(
      ({ name, region, subregion, capital, population, languages, alpha3Code, flags, ...rest }) =>
        ({
          name,
          region,
          flags,
          alpha3Code,
          ...rest,
          searchText: [region, capital, subregion, ...languages, name]
            .join('').replaceAll(' ', '').replaceAll('-', '').replaceAll('.', '').replaceAll(',', '').toLowerCase(),
          summary: new Map<string, string | undefined>([
            ['Population', population.toString()],
            ['Region', region],
            ['Capital', capital],
          ]),
        })),
  })
  const filterText = ref<string>('')
  const filterSelected = ref()
  const countries = computed(() => {
    if (filterSelected.value && filterText.value)
      return allCountries.value?.filter(country => country.region === filterSelected.value && country.searchText.includes(filterText.value.toLowerCase()))

    if (filterSelected.value)
      return allCountries.value?.filter(country => country.region === filterSelected.value)

    if (filterText.value)
      return allCountries.value?.filter(country => country.searchText.includes(filterText.value.toLowerCase()))

    return allCountries.value
  })

  function filterData(filter: string) {
    filterSelected.value = filter
  }
  return { countries, fetchData, loading, filterData, filterText, filterSelected }
})
