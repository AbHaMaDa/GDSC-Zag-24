import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlices"
import cartSlice from "./slices/cartSlice";

 export const store = configureStore({
    reducer:{
        productsSlice:productsSlice,
        cartSlice:cartSlice
    }
});