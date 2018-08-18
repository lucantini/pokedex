import axios from 'axios';

export function getTypes(filters = 'type') {
    return axios.get(`http://pokeapi.salestock.net/api/v2/${filters}/`);
}

export function getType(type) {
    return axios.get(`http://pokeapi.salestock.net/api/v2/type/${type}/`);
}
