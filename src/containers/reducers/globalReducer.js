const State = {
    isLoading: false,
};

function globalReducer (state = State, action) {
    switch (action.type) {
        case 'TOGGLE_GLOBAL_LOADER':
            return { ...state, isLoading: !state.isLoading };
        default:
            return state;
    }
}

export default globalReducer;
