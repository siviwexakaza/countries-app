import http from '../http-common';

//API Documentation https://restcountries.com/
class CountriesService {
    getAllCountries(){
        return http.get('/all');
    }

    getCountryByFullName(name){
        return http.get(`/name/${name}`);
    }
}

export default new CountriesService();