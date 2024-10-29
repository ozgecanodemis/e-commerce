import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // değişiklik burada
import logger from 'redux-logger';

import clientReducer from './clientReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';

const store = configureStore({
    reducer: {
        client: clientReducer,
        product: productReducer,
        shoppingCart: shoppingCartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

// Types

export default store;
