import { getTypes } from '../../controllers/pokeControl';

const getFiltersFulfilled = (filters) => ({
    type: 'GET_FILTERS_FULFILLED',
    filters,
});

const getFilters = (filters) => {
    return (dispatch) => {
        getTypes(filters).then(resp => {
            dispatch(getFiltersFulfilled(resp.data.results));
        });
    };
};

export {
    getFilters,
};
