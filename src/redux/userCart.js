import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserCart = createAsyncThunk('userCart/fetchUserCart', async () => {
    const res = await axios.get('http://localhost:3001/cart/1');
    return res.data.items;
});

export const updateUserCart = createAsyncThunk(
    'userCart/update',
    async (newItem, thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:3001/cart/1');
            const existingItems = res.data.items;
            const itemIndex = existingItems.findIndex(item => item.id === newItem.id);

            if (itemIndex >= 0) {
                existingItems[itemIndex].quantity += 1;
            } else {
                existingItems.push(newItem);
            }
            const updateRes = await axios.put('http://localhost:3001/cart/1', {
                ...res.data,
                items: existingItems,
            });
            return updateRes.data.items;
        } catch (error) {
            console.error('Error updating cart:', error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const Inc_Dec = createAsyncThunk(
    'userCart/Inc_Dec',
    async (Operation, thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:3001/cart/1');
            const existingItems = res.data.items;
            const itemIndex = existingItems.findIndex(item => item.id === Operation.id);
            if (existingItems[itemIndex].quantity <= 1 && Operation.operand === 'Sub') {
                const updatedItems = existingItems.filter(item => item.id !== Operation.id);
                const res = await axios.put(`http://localhost:3001/cart/1`, {
                    id: 1,
                    userId: 1,
                    items: updatedItems
                });
                return res.data.items;
            }
            if (Operation.operand === 'Add') {
                existingItems[itemIndex].quantity += 1;
            } else {
                existingItems[itemIndex].quantity -= 1;
            }
            const updateRes = await axios.put('http://localhost:3001/cart/1', {
                ...res.data,
                items: existingItems,
            });
            return updateRes.data.items;
        } catch (error) {
            console.error('Error updating cart:', error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const removeItemFromCart = createAsyncThunk(
    'userCart/removeItemFromCart',
    async (itemIdToRemove, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const currentCart = state.cart.items || [];
            const updatedItems = currentCart.filter(item => item.id !== itemIdToRemove);

            const res = await axios.put(`http://localhost:3001/cart/1`, {
                id: 1,
                userId: 1,
                items: updatedItems,
            });

            return res.data.items;
        } catch (error) {
            console.error("Error removing item:", error);
            return rejectWithValue(error.message);
        }
    }
);

const userCartSlice = createSlice({
    name: 'userCart',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // FETCH
            .addCase(fetchUserCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchUserCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // ADD/UPDATE
            .addCase(updateUserCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(updateUserCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // REMOVE
            .addCase(removeItemFromCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeItemFromCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(removeItemFromCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(Inc_Dec.pending, (state) => {
                state.loading = true;
            })
            .addCase(Inc_Dec.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload; // 👈 Update Redux state with latest data
            })
            .addCase(Inc_Dec.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default userCartSlice.reducer;
