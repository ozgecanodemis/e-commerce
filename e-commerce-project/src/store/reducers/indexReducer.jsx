// indexReducer.jsx
import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

// Product Slice
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

// Shopping Cart Slice
const shoppingCartSlice = createSlice({
    name: 'shopping',
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.total += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.total -= state.items[index].price;
                state.items.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        }
    }
});

// User Slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isAuthenticated: false,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

const rootReducer = combineReducers({
    product: productSlice.reducer,
    shopping: shoppingCartSlice.reducer,
    user: userSlice.reducer,
});

export default rootReducer;

// Export actions
export const { setProducts, setLoading, setError: setProductError } = productSlice.actions;
export const { addToCart, removeFromCart, clearCart } = shoppingCartSlice.actions;
export const { setUser, clearUser, setError: setUserError } = userSlice.actions;