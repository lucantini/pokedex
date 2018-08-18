import * as pokeControl from '../../controllers/pokeControl';
import { toggleGlobalLoader } from './globalActions';

const getFiltersFulfilled = (filters) => ({
    type: 'GET_FILTERS_FULFILLED',
    filters,
});

const getFilterFulfilled = (filter) => ({
    type: 'GET_FILTER_FULFILLED',
    filter,
});

const getFilters = (filters) => {
    return (dispatch) => {
        dispatch(toggleGlobalLoader());
        pokeControl.getFilters(filters).then(resp => {
            dispatch(getFiltersFulfilled(resp.data.results));
            dispatch(toggleGlobalLoader());
        });
    };
};

const getFilter = (id, filter) => {
    return (dispatch) => {
        dispatch(toggleGlobalLoader());
        pokeControl.getFilter(id, filter).then(resp => {
            dispatch(getFilterFulfilled(resp.data.pokemon));
            dispatch(toggleGlobalLoader());
        });
    };
};

export {
    getFilters,
    getFilter,
};
