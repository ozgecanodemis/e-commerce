import md5 from 'md5';
import axiosAuth from '../../api/axiosAuth';
import { setUser } from './userActions';
import { toast } from 'react-toastify';
import { setCategories, setProductList, setTotal } from "./productActions";
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

    return myApi
        .get("/categories")
        .then((response) => {
            dispatch(setCategories(response.data));
        })
        .catch((error) => {
            console.error("Error fetching categories:", error);
            //TODO FETCH STATE İLE LOADİNG && SUCCESS && ERroe
        });
};
export const fetchProducts = (queryString = "") => (dispatch) => {
    const endpoint = queryString ? `/products?${queryString}` : "/products";

    console.log("Fetching products from endpoint:", endpoint); // Log for debugging

    return myApi
        .get(endpoint)
        .then((response) => {
            console.log("Fetched products response:", response.data); // Log response for debugging
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
};
