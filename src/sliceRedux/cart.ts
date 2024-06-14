import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action?.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item?.id !== action.payload);
    },
    updateCart(state, action) {
      const itemIndex = state.findIndex(
        (item) => item?.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state[itemIndex] = action.payload;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
