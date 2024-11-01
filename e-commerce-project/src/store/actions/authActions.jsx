// src/store/actions/authActions.jsx
import md5 from 'md5';
import axiosInstance from '../../api/axiosInstanca';
import { setUser } from './userActions';
import { toast } from 'react-toastify';


export const loginUser = (credentials, rememberMe) => async (dispatch) => {


    try {
        const response = await axiosInstance.post('/login', credentials);

        const userInfo = {
            name: response.data.name,
            email: response.data.email || credentials.email,
            role_id: response.data.role_id,
            avatar: response.data.email
                ? `https://www.gravatar.com/avatar/${md5(response.data.email)}?d=mp`
                : `https://www.gravatar.com/avatar/${md5(credentials.email)}?d=mp`,
            token: response.data.token
        };

        dispatch(setUser(userInfo));
        if (rememberMe) {
            localStorage.setItem('token', response.data.token);
        }
        toast.success("Giriş Başarılı")
    } catch (error) {
        console.error(error);
        toast.error("Giriş yapılamadı.")
    }
};




