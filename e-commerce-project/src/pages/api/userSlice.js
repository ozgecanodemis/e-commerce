import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Login işlemi için asyncThunk
export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
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
            return data; // Başarılı veriyi döndür
        } catch (error) {
            return rejectWithValue(error.message); // Hata mesajını döndür
        }
    }
);

// Logout işlemi için asyncThunk
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            // Burada gerekli logout işlemleri yapılabilir
            return true; // Başarılı bir logout işlemi
        } catch (error) {
            return rejectWithValue(error.message); // Hata mesajını döndür
        }
    }
);

// Başlangıç durumu
const initialState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
};

// User slice tanımı
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.token = null;
            });
    },
});

// Action ve reducer export işlemleri
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
