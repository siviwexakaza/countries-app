import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const useCountriesStore = defineStore({
  id: 'store',
  state: () => ({
    countries: useStorage('countries', []),
    selectedCountry: null,
    isLoading: false,
    isOffline: false,
  }),
  actions: {
    setCountries(arrayCountryNames){
      this.countries = arrayCountryNames;
    },
    setSelectedCountry(countryObj){
      this.selectedCountry = countryObj;
    },
    setIsLoading(bool){
      this.isLoading = bool;
    },
    setIsOffline(bool) {
      this.isOffline = bool;
    }

  }
})
