import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartProduct } from 'src/types';

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

const indexOfCartProduct = (cartProduct: CartProduct, state: CartState) => {
  const { product: { id: idToAdd }, size: sizeToAdd } = cartProduct;
  const cartProducts = state.products;

  return cartProducts.findIndex(
    ({ product: { id }, size }) => id === idToAdd && size === sizeToAdd
  );
}

const onExistingItemDo = (
  callback: (cartProduct: CartProduct, index: number) => void,
  state: CartState,
  cartProduct: CartProduct,
) => {
  const productIndex = indexOfCartProduct(cartProduct, state);

  if (productIndex !== -1) {
    callback(cartProduct, productIndex);
  }
};

const modifyCartProductQuantity = (cartProduct: CartProduct, state: CartState, difference: number) => {
  let wasModified = false;

  onExistingItemDo(
    (cartProduct: CartProduct, productIndex: number) => {
      const newQuantity = cartProduct.quantity + difference;

      if (newQuantity === 0) {
        state.products.splice(productIndex, 1);
      } else {
        state.products[productIndex].quantity += difference;
      }

      wasModified = true;
    },
    state,
    cartProduct,
  );

  return wasModified;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingProductIncrement = modifyCartProductQuantity(action.payload, state, 1);

      if (existingProductIncrement) {
        return;
      }

      state.products = [...state.products, action.payload];
    },
    incrementExistingProduct: (state, action: PayloadAction<CartProduct>) => {
      modifyCartProductQuantity(action.payload, state, 1);
    },
    decrementExistingProduct: (state, action: PayloadAction<CartProduct>) => {
      modifyCartProductQuantity(action.payload, state, -1);
    },
    removeCartProduct: (state, action: PayloadAction<CartProduct>) => {
      const indexToRemove = indexOfCartProduct(action.payload, state);

      if (indexToRemove !== -1) {
        state.products.splice(indexToRemove, 1);
      }
    },
    emptyCart: (state) => {
      state.products = [];
    },
  }
});

export const {
  addProductToCart,
  incrementExistingProduct,
  decrementExistingProduct,
  removeCartProduct,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
