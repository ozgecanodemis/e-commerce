export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export const setProductList = (products) => {
    return {
        type: SET_PRODUCT_LIST,
        payload: products,
    };
};

export const setTotalProductCount = () => {
    return {
        type: SET_TOTAL_PRODUCT_COUNT,
    };
};

export const setPageCount = (count) => {
    return {
        type: SET_PAGE_COUNT,
        payload: count,
    };
};

export const setActivePage = (page) => {
    return {
        type: SET_ACTIVE_PAGE,
        payload: page,
    };
};

export const setFetchState = (fetchState) => {
    return {
        type: SET_FETCH_STATE,
        payload: fetchState,
    };
};