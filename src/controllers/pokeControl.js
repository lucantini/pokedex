import axios from 'axios';

export function getTypes() {
    return axios.get(`http://pokeapi.salestock.net/api/v2/type/`);
}

export function getType(type) {
    return axios.get(`http://pokeapi.salestock.net/api/v2/type/${type}/`);
}
