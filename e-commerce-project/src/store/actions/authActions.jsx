// src/store/actions/authActions.js

import React from 'react';
import { useDispatch } from 'react-redux';

// Kullanıcı girişini başlat
export const LoginComponent = () => {
    const dispatch = useDispatch();

    const loginUser = async (credentials) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();

            if (data.success) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
            } else {
                dispatch({ type: 'LOGIN_FAILURE', payload: data.message });
            }
        } catch (error) {
            dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        }
    };

    return (
        <div>
            {/* Giriş Formu Burada Olacak */}
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const credentials = {
                    username: formData.get('username'),
                    password: formData.get('password'),
                };
                loginUser(credentials);
            }}>
                <input name="username" type="text" placeholder="Kullanıcı Adı" required />
                <input name="password" type="password" placeholder="Şifre" required />
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    );
};

// Kullanıcı çıkışını başlat
export const LogoutComponent = () => {
    const dispatch = useDispatch();

    const logoutUser = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: 'POST',
            });
            const data = await response.json();

            if (data.success) {
                dispatch({ type: 'LOGOUT_SUCCESS' });
            } else {
                dispatch({ type: 'LOGOUT_FAILURE', payload: data.message });
            }
        } catch (error) {
            dispatch({ type: 'LOGOUT_ERROR', payload: error.message });
        }
    };

    return (
        <button onClick={logoutUser}>Çıkış Yap</button>
    );
};
