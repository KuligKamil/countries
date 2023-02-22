import { ref } from 'vue'
import { defineStore } from 'pinia'
// import countriesResponse from "./data.json";
import countriesResponse from '@/stores/data.json'
export const countriesStore = defineStore('countries', () => {
  const countries = ref(countriesResponse.map(country => ({
    ...country,
    summary: new Map<string, string | undefined>([
      ['Population', country.population.toString()],
      ['Region', country.region],
      ['Capital', country.capital],
    ]),
  })))
  return { countries }
  // const filters = ref(countries.value.map(country => country.region))
  // console.log(countries)
})
