// shoppingCartReducer.jsx

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM_QUANTITY,
    CLEAR_CART,
    SET_PAYMENT_INFO,
    SET_ADDRESS_INFO
} from '../actions/shoppingCartActions';

const initialState = {
    items: [],
    paymentInfo: null,
    addressInfo: null
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case UPDATE_CART_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.productId
                        ? { ...item, quantity: action.payload.newQuantity }
                        : item
                )
            };
        case CLEAR_CART:
            return {
                ...state,
                items: []
            };
        case SET_PAYMENT_INFO:
            return {
                ...state,
                paymentInfo: action.payload
            };
        case SET_ADDRESS_INFO:
            return {
                ...state,
                addressInfo: action.payload
            };
        default:
            return state;
    }
};

export default shoppingCartReducer;