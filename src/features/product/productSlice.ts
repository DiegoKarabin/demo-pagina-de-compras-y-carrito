import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

export interface ProductState {
  currentProduct?: Product;
  selectedSize?: number;
  tryingToAddToCart: boolean;
}

const initialState: ProductState = {
  currentProduct: undefined,
  selectedSize: undefined,
  tryingToAddToCart: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedSize: (state, action: PayloadAction<number>) => {
      state.selectedSize = action.payload;
    },
    resetSelectedSize: (state) => {
      state.selectedSize = undefined
    },
    setTryingToAddToCart: (state, action: PayloadAction<boolean>) => {
      state.tryingToAddToCart = action.payload;
    },
    setCurrentProduct: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    }
  }
});

export const {
  setSelectedSize,
  resetSelectedSize,
  setTryingToAddToCart,
  setCurrentProduct
} = productSlice.actions;

export default productSlice.reducer;
