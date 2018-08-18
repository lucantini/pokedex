import * as pokeControl from '../../controllers/pokeControl';
import { toggleGlobalLoader } from './globalActions';

const getPokeFulfilled = (selectedPoke) => ({
    type: 'GET_POKE_FULFILLED',
    selectedPoke,
});

const getPoke = (id, filter) => {
    return (dispatch) => {
        dispatch(toggleGlobalLoader());
        pokeControl.getPoke(id, filter).then(resp => {
            dispatch(getPokeFulfilled(resp.data));
            dispatch(toggleGlobalLoader());
        });
    };
};

export {
    getPoke,
};
