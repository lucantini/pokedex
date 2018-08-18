const State = {
    filters: [],
};

function filtersReducer (state = State, action) {
    switch (action.type) {
        case 'GET_FILTERS_FULFILLED':
            return { ...state, filters: action.filters };
        default:
            return state;
    }
}

export default filtersReducer;
