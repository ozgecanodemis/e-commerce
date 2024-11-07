import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './reducers/userReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import productReducer from './reducers/productReducer';
import categoriesReducer from './reducers/categoriesSlice';

const myStore = configureStore({
    reducer: {
        client: userReducer,
        product: productReducer,
        shopping: shoppingCartReducer,
        categories: categoriesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default myStore;