// src/store/actions/authActions.jsx
import axiosAuth from '../../api/axiosAuth';
import { setUserRequest, setUserSuccess, setUserFailure } from '../actions/userActions';

// Define FETCH_STATES
export const FETCH_STATES = {
    REQUEST: 'FETCH_STATES_REQUEST',
    SUCCESS: 'FETCH_STATES_SUCCESS',
    FAILURE: 'FETCH_STATES_FAILURE',
};

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
    dispatch(setUserRequest()); // Existing request action
    dispatch({ type: FETCH_STATES.REQUEST }); // Dispatching FETCH_STATES request

    try {
        const response = await axiosAuth().post('/login', credentials);
        dispatch(setUserSuccess(response.data)); // Existing success action
        dispatch({ type: FETCH_STATES.SUCCESS }); // Dispatching FETCH_STATES success

        if (rememberMe) {
            localStorage.setItem('token', response.data.token);
        }
    } catch (error) {
        dispatch(setUserFailure(error.response?.data?.message || 'Login failed')); // Existing failure action
        dispatch({ type: FETCH_STATES.FAILURE }); // Dispatching FETCH_STATES failure
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(setUserSuccess(null));
};

export const verifyToken = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await axiosAuth().get('/verify-token');
            dispatch(setUserSuccess(response.data));
        } catch (error) {
            dispatch(setUserFailure('Token verification failed'));
            localStorage.removeItem('token');
        }
    }
};
