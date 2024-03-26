import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../src/ProductsListReducer/productlistslice'

export const store = configureStore({
    reducer:productsReducer
});