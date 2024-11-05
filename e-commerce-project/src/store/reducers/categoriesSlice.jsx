import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_BASE_URL = 'https://workintech-fe-ecommerce.onrender.com/categories';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_BASE_URL);
            // API'den gelen yanıtın bir dizi olduğundan emin olalım
            return Array.isArray(response.data) ? response.data : [];
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Kategoriler alınırken bir hata oluştu');
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default categoriesSlice.reducer;
