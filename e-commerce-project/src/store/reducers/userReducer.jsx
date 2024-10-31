import {
    SET_USER_FAILURE,
    SET_USER_REQUEST,
    SET_USER_SUCCESS,
} from "../actions/userActions";

export const FETCH_STATES = {
    NOT_FETCHED: "not fetched",
    FETCHING: "fetching",
    FETCHED: "fetched",
    FETCH_FAILED: "failed",
};

const initialState = {
    user: {},
    fetchState: FETCH_STATES.NOT_FETCHED,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_REQUEST:
            return {
                ...state,
                fetchState: FETCH_STATES.FETCHING,
                error: null,
            };
        case SET_USER_SUCCESS:
            return {
                ...state,
                fetchState: FETCH_STATES.FETCHED,
                user: action.payload,
                error: null,
            };
        case SET_USER_FAILURE:
            return {
                ...state,
                fetchState: FETCH_STATES.FETCH_FAILED,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;