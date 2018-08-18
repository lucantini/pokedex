const State = {
    selectedPoke: {},
};

function pokeReducer (state = State, action) {
    switch (action.type) {
        case 'GET_POKE_FULFILLED':
            return { ...state, selectedPoke: action.selectedPoke };
        default:
            return state;
    }
}

export default pokeReducer;
