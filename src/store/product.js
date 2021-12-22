import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: []
};

const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    productDataHandler(state, action) {
      state.productData = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
