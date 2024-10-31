// shoppingCartActions.jsx

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const SET_PAYMENT_INFO = "SET_PAYMENT_INFO";
export const SET_ADDRESS_INFO = "SET_ADDRESS_INFO";

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const updateCartItemQuantity = (productId, newQuantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { productId, newQuantity },
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const setPaymentInfo = (paymentInfo) => ({
    type: SET_PAYMENT_INFO,
    payload: paymentInfo,
});

export const setAddressInfo = (addressInfo) => ({
    type: SET_ADDRESS_INFO,
    payload: addressInfo,
});