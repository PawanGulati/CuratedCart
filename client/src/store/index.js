import {createStore,applyMiddleware,compose} from 'redux'

// Implementing REDUX persistance 
import {persistStore} from 'redux-persist'

import logger from 'redux-logger'

import persistReducer from './root-reducer'

// All middleware goes here 
const middlewares = []
if(process.env.NODE_ENV !=='production'){
    middlewares.push(logger)
}

// Adding chrome REDUX dev tool functionality as middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistReducer,composeEnhancers(applyMiddleware(...middlewares)))

export const persistor = persistStore(store)

export default {store,persistor}
