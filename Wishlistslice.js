import { createSlice } from "@reduxjs/toolkit";
const Wishlistslice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
         addtoWishlist: (state, action) => {
      const item = action.payload;
      const existing = state.find((temp) => temp.id === item.id);
      if (!existing) {
        state.push({ ...item });
      }
    },
        removefromWishlist:(state,action)=>{
            return state.filter((p)=>p.id!==action.payload);
        },
        clearWishlist:
             ()=>[],
    },
})
export const {addtoWishlist,removefromWishlist,clearWishlist}=Wishlistslice.actions;
export default Wishlistslice.reducer;