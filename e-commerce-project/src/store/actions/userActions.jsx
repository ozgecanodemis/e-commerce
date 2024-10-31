import axiosInstance from "../../api/axiosInstanca";
export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILURE = "SET_USER_FAILURE";

const setUserRequest = () => ({
    type: SET_USER_REQUEST,
});

export const setUserSuccess = (user) => ({
    type: SET_USER_SUCCESS,
    payload: user,
});

const setUserFailure = (error) => ({
    type: SET_USER_FAILURE,
    payload: error,
});

export const setUser = (userData) => {
    return (dispatch) => {
        dispatch(setUserRequest());

        axiosInstance
            .post("/login", userData)
            .then((response) => {
                dispatch(setUserSuccess(response.data));
            })
            .catch((error) => {
                dispatch(setUserFailure(error.message));
            });
    };
};