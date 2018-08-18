const State = {
    filters: [],
    filter: [],
};

function filtersReducer (state = State, action) {
    switch (action.type) {
        case 'GET_FILTERS_FULFILLED':
            return { ...state, filters: action.filters };
        case 'GET_FILTER_FULFILLED':
            return { ...state, filter: action.filter };
        default:
            return state;
    }
}

export default filtersReducer;
