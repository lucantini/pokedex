import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import allReducers from '../reducers';

function configureStore(initialState) {

    const middleware = applyMiddleware(thunk);
    return createStore(allReducers, initialState, compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ));
}

export default configureStore;
