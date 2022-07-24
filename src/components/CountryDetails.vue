<template>
    <v-container>
        <v-row class="text-center">

            <v-col class="mb-12" v-if="store.isLoading">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-col>
            <v-col class="mb-12 text-center" v-if="!store.isLoading && store.selectedCountry != null">
                
                <h2>{{store.selectedCountry.name}}</h2>
                <p>Population: {{store.selectedCountry.population}}</p>
                <p>Capital: {{store.selectedCountry.capital}}</p>
                <p>Continent: {{store.selectedCountry.continent}}</p>
                <img :src="store.selectedCountry.flag" alt="flag" />
            </v-col>


        </v-row>
    </v-container>
</template>

<script>
import { useCountriesStore } from '@/stores/store';

export default {
    name: 'CountriesDetails',

    setup() {
        const store = useCountriesStore();

        return {
            store
        }
    },
}
</script>

<style scoped>
img { 
    width: '100px';
    height: '100px';
    margin: '50px';
}
</style>
