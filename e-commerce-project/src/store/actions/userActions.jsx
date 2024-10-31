// src/store/actions/userActions.jsx
import axiosInstance from "../../api/axiosInstanca"; // Axios instance'ınızı buraya ekleyin
import axios from 'axios';

export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILURE = "SET_USER_FAILURE";

export const setUserRequest = () => ({
    type: SET_USER_REQUEST,
});

export const setUserSuccess = (user) => ({
    type: SET_USER_SUCCESS,
    payload: user,
});

export const setUserFailure = (error) => ({
    type: SET_USER_FAILURE,
    payload: error,
});

// User'ı ayarlamak için thunk
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

// Ekstra bir login fonksiyonu
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/login', { username, password }, { headers: { 'Content-Type': 'application/json' } });
        return response.data;
    } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message);
        throw error;
    }
};
