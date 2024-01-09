import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartProduct } from 'src/types';

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
      state.products = [...state.products, action.payload];
    }
  }
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
