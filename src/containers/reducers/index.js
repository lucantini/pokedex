import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';
import pokeReducer from './pokeReducer';
import globalReducer from './globalReducer';

const allReducers = combineReducers({
    filtersReducer,
    pokeReducer,
    globalReducer,
});

export default allReducers;
