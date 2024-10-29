// src/hooks/useAutoLogin.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api'; // API hizmetini içe aktarın
import { setCurrentUser, clearUser } from '../store/actions/clientActions';

const useAutoLogin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            // Token doğrulama isteği yapın
            api.get('/verify', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((response) => {
                    const user = response.data;
                    dispatch(setCurrentUser(user)); // Kullanıcıyı Redux store'a ekle
                })
                .catch((error) => {
                    console.error('Token doğrulama hatası:', error);
                    localStorage.removeItem('token'); // Geçersiz token'ı kaldır
                    dispatch(clearUser()); // Kullanıcı verisini temizle
                });
        }
    }, [dispatch]);
};

export default useAutoLogin;
