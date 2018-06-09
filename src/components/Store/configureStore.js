import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import Reducers from './reducers'

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_.DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(Reducers, composeEnhancers(applyMiddleware(promiseMiddleware)))
}

export default configureStore;