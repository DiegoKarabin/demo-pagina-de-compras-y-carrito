import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'src/features/cart/cartSlice';
import productReducer from 'src/features/product/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
