import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice'
import userReducer from './userSlice'
import userCartReducer from './userCart'
import CatagoryProducts from './CatagoryProduct'
export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
        cart: userCartReducer,
        Catagory: CatagoryProducts,
    },
});