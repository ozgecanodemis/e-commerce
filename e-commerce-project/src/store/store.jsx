import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './reducers/userReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    client: userReducer,
    product: productReducer,
    shopping: shoppingCartReducer,
});
const myStore = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);
export default myStore;