import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import {Constants as constants} from './config/constants'
import rootReducer from './components/index';
import App from './components/main/main'

const initialState = {};
const store: Store<any> = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(constants.appContainerId)
);