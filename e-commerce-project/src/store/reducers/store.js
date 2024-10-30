// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './userSlice';
import clientReducer from './clientReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        client: clientReducer,
        product: productReducer,
        shoppingCart: shoppingCartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default store;