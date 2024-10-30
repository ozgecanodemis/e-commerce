// src/pages/api/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Kullanıcı girişini simüle eden async thunk
export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, { dispatch, rejectWithValue }) => {
        const validUsers = [
            { email: 'customer@commerce.com', password: '123456' },
            { email: 'store@commerce.com', password: '123456' },
            { email: 'admin@commerce.com', password: '123456' }
        ];

        const user = validUsers.find(
            u => u.email === userData.email && u.password === userData.password
        );

        if (user) {
            const fakeToken = "fakeToken123"; // Örnek token
            dispatch(setUser({ email: userData.email, token: fakeToken }));

            // "Beni Hatırla" seçiliyse token'ı localStorage'a kaydet
            if (userData.rememberMe) {
                localStorage.setItem("token", fakeToken);
            }

            return { email: userData.email, token: fakeToken };
        } else {
            console.log('Geçersiz giriş denemesi:', userData); // Hata kaydı
            return rejectWithValue("Giriş başarısız: Geçersiz e-posta veya şifre");
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.email = null;
            state.token = null;
        },
    },
});

// Export işlemleri
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
