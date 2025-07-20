import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice'
import userReducer from './userSlice'
import userCartReducer from './userCart'
export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
        cart: userCartReducer,
    },
});