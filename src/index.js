/*!
 * @author raymond <raymond@vndevops.com>
 * date 10/31/2019
 * description 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '../public/favicon.ico';
//import { createStore } from 'redux';
//import { Provider, connect } from 'react-redux';
//import {configureStore} from './configuration/createReducerManager';
//import {initializeStore} from "./configuration/initializeStore";
import configureStore from './configs/configureStore';
//import createReducer from './configuration/createReducer';
//const store = createStore(createReducer);
import Root from './Root';
const store = configureStore();
//store.injectReducer("rootReducer3", rootReducer3);
//store.reducerManager.add("rootReducer3", rootReducer3);
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
