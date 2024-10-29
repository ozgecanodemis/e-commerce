import { setUser } from '../reducers/clientReducer';

export const loginUser = (userData) => {
    return async (dispatch) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            dispatch(setUser(data.user));

            if (userData.rememberMe) {
                localStorage.setItem('token', data.token);
            }

            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };
};