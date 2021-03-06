import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer"

export const middelwares = thunk;

export const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;