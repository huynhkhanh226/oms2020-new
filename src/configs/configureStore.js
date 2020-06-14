import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import authMiddleware from './middleware/auth'
import createReducer, {staticReduces} from '../reducers/index'
import logger from 'redux-logger'
import {createReducerManager} from './createReducerManager';
//import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(preloadedState) {
  const middlewares = [logger,thunkMiddleware, loggerMiddleware, authMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  //const composedEnhancers = compose(...enhancers)
  const composedEnhancers = compose(...enhancers)
  const store = createStore(createReducer(), preloadedState, composedEnhancers)
  //console.log(store);
  const reducerManager = createReducerManager(staticReduces);
  // Optional: Put the reducer manager on the store so it is easily accessible
  store.reducerManager = reducerManager;
  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}
  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }
  //console.log(store);
  return store
}