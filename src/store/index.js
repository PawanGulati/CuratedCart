import {createStore,applyMiddleware,compose} from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

// All middleware goes here 
const middlewares = [logger]

// Adding chrome REDUX dev tool functionality as middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)))


