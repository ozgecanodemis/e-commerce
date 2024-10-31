// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/indexReducer';
import { thunk } from 'redux-thunk'; // redux-thunk'ı içe aktar
import { createLogger } from 'redux-logger'; // redux-logger'ı içe aktar

// Logger middleware'ı oluştur
const logger = createLogger();

// Store'u oluştur
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk, logger), // thunk ve logger'ı middleware dizisine ekle
});

export default store;
