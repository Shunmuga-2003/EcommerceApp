import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      const item = action.payload;
      const existing = state.find((p) => p.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removefromCart: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    clearcart: () => [],
  },
});

export const { addtoCart, removefromCart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
