import md5 from 'md5';
import axiosAuth from '../../api/axiosAuth';
import { setUser } from './userActions';
import { toast } from 'react-toastify';
import { setCategories } from "./productActions";
import myApi from '../../api/axiosInstanca';


export const loginUser = (credentials, rememberMe, history) => async (dispatch) => {
    try {
        const response = await axiosAuth.post('/login', credentials);

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
        axiosAuth.defaults.headers.common['Authorization'] = response.data.token;
        toast.success("Giriş Başarılı");
        history.push('/'); // Redirect to home page after successful login
    } catch (error) {
        console.error(error);
        toast.error("Giriş yapılamadı.");
    }
};

export const verifyToken = () => async (dispatch) => {
    try {
        const response = await axiosAuth.get('/verify');

        const userInfo = {
            name: response.data.name,
            email: response.data.email,
            role_id: response.data.role_id,
            avatar: `https://www.gravatar.com/avatar/${md5(response.data.email)}?d=mp`,
            token: response.data.token
        };

        dispatch(setUser(userInfo));

        // Renew token in localStorage and axios header
        localStorage.setItem('token', response.data.token);
        axiosAuth.defaults.headers.common['Authorization'] = response.data.token;
    } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
        delete axiosAuth.defaults.headers.common['Authorization'];
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    delete axiosAuth.defaults.headers.common['Authorization'];
    dispatch(setUser({}));
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

export const fetchProducts = (categoryCode = "", limit = 16, offset = 0, filter = "") => (dispatch) => {
    dispatch(setFetchState("loading"));

    let queryString = `limit=${limit}&offset=${offset}&filter=${filter}`;

    if (categoryCode) {
        queryString += `&category=${categoryCode}`;
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