<template>
    <v-container>
        <v-row class="text-center">

            <v-col class="mb-12">
                <h1 class="display-2 font-weight-bold mb-3">
                    The Countries App
                </h1>

                <p class="subheading font-weight-regular">
                    Select a country below to get details about it
                </p>
            </v-col>


        </v-row>
        <v-row class="text-center">
            <v-col class="mb-4"></v-col>
            <v-col class="mb-4">
                <v-autocomplete v-model="value" :loading="isLoading" :items="store.countries" dense filled
                    label="Pick a country"></v-autocomplete>
            </v-col>
            <v-col class="mb-4"></v-col>

        </v-row>
    </v-container>
</template>

<script>
import { useCountriesStore } from '@/stores/store';
import CountriesService from '../services/CountriesService';

export default {
    name: 'CountriesSearch',

    data: () => ({
        value: null,
        isLoading: false
    }),

    watch: {
        value(value) {
            
            this.getSelectedCountry(value);
        }
    },
    setup() {
        const store = useCountriesStore();

        return {
            store
        }
    },
    mounted() {
        this.getAllCountries();
    },
    methods: {
        async getSelectedCountry(name){
            if(!this.store.isLoading){
                try{ 
                    this.store.setIsLoading(true);
                    const result = await CountriesService.getCountryByFullName(name);
                    const data = result.data[0];
                    const country = {
                        name: data.name.common,
                        capital: data.capital[0],
                        continent: data.continents[0],
                        population: data.population,
                        flag: data.flags.png
                    }
                    this.store.setSelectedCountry(country);
                    this.store.setIsLoading(false);
                }catch(e) {
                    alert(e.message);
                    this.store.setIsLoading(false);
                }
            }
        },

        async getAllCountries() {

            //Pinia will store the countries locally on first call
            //There's no need to make another API call to get all countries since countries will not change
            if (!this.store.countries.length > 0) {
                try {
                    this.isLoading = true;
                    const results = await CountriesService.getAllCountries();
                    //From the results I'll create an array of names of countries
                    const countries = []
                    //I'll store the first 30 countries, storing all countries in memory made the app slow
                    for(let i = 0; i < 30; i++){
                        countries.push(results.data[i].name.common);
                    }

                    //Commented this piece of code coz it stores all 250 countries in memory and makes app slow
                    // results.data.forEach(country => {
                    //     countries.push(country.name.common);
                    // })

                    this.store.setCountries(countries);
                    this.isLoading = false;
                } catch (e) {
                    alert(e.message);
                    this.isLoading = false;
                }
            }

        }
    }
}
</script>
