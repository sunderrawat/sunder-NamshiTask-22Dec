import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCartItem: 0,
  cartAmount: 0,
  cartDataItem:[],
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    cartAmountHandler(state, action) {
      state.cartAmount = action.payload;
    },
    totalCarItemHandler(state, action) {
      state.totalCartItem = action.payload;
    },
    cartDataHandler(state, action) {
      state.cartDataItem = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
