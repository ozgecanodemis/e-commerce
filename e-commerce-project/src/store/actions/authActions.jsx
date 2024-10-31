// src/store/actions/authActions.jsx
import axiosAuth from '../../api/axiosAuth';
import { setUser, clearUser } from '../reducers/indexReducer';

export const verifyToken = () => async (dispatch) => {
    try {
        const response = await axiosAuth().get('/verify-token');
        if (response.data.isValid) {
            dispatch(setUser(response.data.user));
        } else {
            dispatch(clearUser());
        }
    } catch (error) {
        console.error('Token verification failed:', error);
        dispatch(clearUser());
    }
};

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await axiosAuth().post('/login', credentials);
        dispatch(setUser(response.data.user));
        localStorage.setItem('token', response.data.token);
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(clearUser());
};