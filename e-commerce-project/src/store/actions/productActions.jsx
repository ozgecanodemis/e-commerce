import {
    SET_CATEGORIES,
    SET_FETCH_STATE,
    SET_FILTER,
    SET_LIMIT,
    SET_OFFSET,
    SET_PRODUCT_DETAIL,
    SET_PRODUCT_LIST,
    SET_TOTAL,
} from "../reducers/productReducer";
import myApi from '../../api/axiosInstanca';

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

export const setProductList = (products) => ({
    type: SET_PRODUCT_LIST,
    payload: products,
});

export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total,
});

export const setFetchState = (state) => ({
    type: SET_FETCH_STATE,
    payload: state,
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit,
});

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setProductDetail = (data) => ({
    type: SET_PRODUCT_DETAIL,
    payload: data,
});

export const fetchProducts = (categoryCode = "", limit = 16, offset = 0, filter = "", gender = "") => (dispatch) => {
    dispatch(setFetchState("loading"));

    let queryString = `limit=${limit}&offset=${offset}&filter=${filter}`;

    if (categoryCode) {
        queryString += `&category=${categoryCode}`;
    }
    if (gender) {
        queryString += `&gender=${gender}`;
    }

    const endpoint = `/products?${queryString}`;

    return myApi
        .get(endpoint)
        .then((response) => {
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState("success"));
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
            dispatch(setFetchState("error"));
        });
};

export const fetchCategories = () => (dispatch) => {
    dispatch(setFetchState("loading"));

    return myApi
        .get("/categories")
        .then((response) => {
            dispatch(setCategories(response.data));
            dispatch(setFetchState("success"));
        })
        .catch((error) => {
            console.error("Error fetching categories:", error);
            dispatch(setFetchState("error"));
        });
};