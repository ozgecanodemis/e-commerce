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
                items: [...state.items, action.payload] // Eklenecek ürün { count, product } formatında olmalı
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.payload) // Burada item.product.id kullanıldı
            };
        case UPDATE_CART_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.product.id === action.payload.productId
                        ? { ...item, count: action.payload.newQuantity } // Burada count alanı güncelleniyor
                        : item
                )
            };
        case CLEAR_CART:
            return {
                ...state,
                items: [] // Sepeti temizler
            };
        case SET_PAYMENT_INFO:
            return {
                ...state,
                paymentInfo: action.payload // Ödeme bilgilerini günceller
            };
        case SET_ADDRESS_INFO:
            return {
                ...state,
                addressInfo: action.payload // Adres bilgilerini günceller
            };
        default:
            return state; // Mevcut durumu koru
    }
};


export default shoppingCartReducer;