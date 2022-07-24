<template>
  <v-app>
    <v-main>
      <CountriesSearch/>
      <CountriesDetails/>
    </v-main>
  </v-app>
</template>

<script>
import CountriesSearch from './components/CountriesSearch.vue'
import CountriesDetails from './components/CountryDetails.vue'

export default {
  name: 'App',

  components: {
    CountriesSearch,
    CountriesDetails
  },
}
</script>
