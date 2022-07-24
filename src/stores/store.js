import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const useCountriesStore = defineStore({
  id: 'store',
  state: () => ({
    countries: useStorage('countries', []),
    selectedCountry: null,
    isLoading: false,
  }),
  getters: {
    getCountries: (state) => state.countries,
    getSelectedCountry: (state) => state.selectedCountry,
    getIsLoading: (state) => state.isLoading,
  },
  actions: {
    setCountries(arrayCountryNames){
      this.countries = arrayCountryNames;
    },
    setSelectedCountry(countryObj){
      this.selectedCountry = countryObj;
    },
    setIsLoading(bool){
      this.isLoading = bool;
    }

  }
})
