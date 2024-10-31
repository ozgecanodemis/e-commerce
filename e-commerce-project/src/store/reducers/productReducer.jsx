import {
    SET_ACTIVE_PAGE,
    SET_FETCH_STATE,
    SET_PAGE_COUNT,
    SET_PRODUCT_LIST,
    SET_TOTAL_PRODUCT_COUNT,
} from "../actions/productActions.jsx";

const initialState = {
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    activePage: 1,
    fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: [...state.productList, action.payload],
            };
        case SET_TOTAL_PRODUCT_COUNT:
            return {
                ...state,
                totalProductCount: state.totalProductCount + 1,
            };
        case SET_PAGE_COUNT:
            return {
                ...state,
                pageCount: action.payload,
            };
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.payload,
            };
        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;