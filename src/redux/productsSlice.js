import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react';
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export default productsSlice.reducer;