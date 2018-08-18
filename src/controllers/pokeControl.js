import axios from 'axios';

export function getFilters(filters = 'type') {
    return axios.get(`http://pokeapi.salestock.net/api/v2/${filters}/`);
}

export function getFilter(id, filter = 'type') {
    return axios.get(`http://pokeapi.salestock.net/api/v2/${filter}/${id}/`);
}

export function getPoke(id) {
    return axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/${id}/`);
}
