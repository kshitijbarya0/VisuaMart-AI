import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchCatagory = createAsyncThunk('Catagory/fetchCatagory', async ({ query }) => {
    const res = await axios.get(`https://fakestoreapi.com/products/category/${query}`);
    return res.data;
});

const CatagoryProducts = createSlice({
    name: 'Catagory',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatagory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCatagory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCatagory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export default CatagoryProducts.reducer;