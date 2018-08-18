import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import GlobalLoader from './components/GlobalLoader/GlobalLoader';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './containers/store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <GlobalLoader />
            <App />
        </React.Fragment>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
