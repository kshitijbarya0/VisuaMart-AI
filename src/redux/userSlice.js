import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const res = await axios.get('http://localhost:3001/users');
    return res.data[0];
});
export const updateUser = createAsyncThunk('user/updateUser', async (data) => {
    const res = await axios.patch(`http://localhost:3001/users/1`, data);
    return res.data;
});
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        phone: '',
        address: '',
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.phone = action.payload.phone;
                state.address = action.payload.address;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                Object.assign(state, action.payload);
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
