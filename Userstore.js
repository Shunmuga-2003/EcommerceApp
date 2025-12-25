import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import userReducer from "./Userslice";
import wishlistReducer from "./Wishlistslice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
