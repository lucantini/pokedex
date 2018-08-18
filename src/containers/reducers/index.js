import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';

const allReducers = combineReducers({
    filtersReducer,
});

export default allReducers;
