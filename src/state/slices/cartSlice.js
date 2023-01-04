import { createSlice } from "@reduxjs/toolkit";
import cartJSON from "./../../model/student/cart.json";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchCart: (state) => {
      console.log("json", cartJSON);
      state.cart = cartJSON;
    },
    getCartDetais: (state) => state.cart,
    addToCart: (state, action) => {
      const item = {
        name: action?.payload?.acf?.name || "",
        price: action?.payload?.acf?.price || 0,
        qt: action?.payload?.acf?.qt || 1,
        image: action?.payload?.acf?.image || "",
        id: action?.payload?.id,
      };
      state.cart = [...state.cart, item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart?.filter((item) => item.id != action.payload);
    },
  },
});

export const { fetchCart, getCartDetais, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
