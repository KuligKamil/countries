import { ref } from "vue";
import { defineStore } from "pinia";
// import countriesResponse from "./data.json";
import countriesResponse from "@/stores/data.json";
export const countriesStore = defineStore("countries", () => {
  const countries = ref(countriesResponse);
  console.log(countries);
  return { countries };
});
