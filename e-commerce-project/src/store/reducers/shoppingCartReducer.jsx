import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART,
    SET_ADDRESS_INFO,
    SET_PAYMENT_INFO,
    UPDATE_CART_ITEM_QUANTITY,
} from "../actions/shoppingCartActions";

const initialState = {
    cart: [],
    payment: {},
    address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.product.id !== action.payload),
            };
        case UPDATE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id === action.payload.productId
                        ? { ...item, count: action.payload.newQuantity }
                        : item
                ),
            };
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
            };
        case SET_PAYMENT_INFO:
            return {
                ...state,
                payment: action.payload,
            };
        case SET_ADDRESS_INFO:
            return {
                ...state,
                address: action.payload,
            };
        default:
            return state;
    }
};

export default shoppingCartReducer;