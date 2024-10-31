import axiosAuth from '../../api/axiosAuth';
import { setUserRequest, setUserSuccess, setUserFailure } from '../actions/userActions';

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
    dispatch(setUserRequest());
    try {
        const response = await axiosAuth().post('/login', credentials);
        dispatch(setUserSuccess(response.data));
        if (rememberMe) {
            localStorage.setItem('token', response.data.token);
        }
    } catch (error) {
        dispatch(setUserFailure(error.response?.data?.message || 'Login failed'));
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