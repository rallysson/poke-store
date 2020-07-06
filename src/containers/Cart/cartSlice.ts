import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Pokemon } from "../../types";

export interface CartProduct extends Pokemon {
  quantity: number;
}

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Pokemon>) => {
      state.push({ ...action.payload, quantity: 1 });
    },
    incrementItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex(
        (item: CartProduct) => item.id === action.payload
      );

      state[itemIndex].quantity = state[itemIndex].quantity + 1;
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex(
        (item: CartProduct) => item.id === action.payload
      );

      if (state[itemIndex].quantity > 1) {
        state[itemIndex].quantity = state[itemIndex].quantity - 1;
      }
    },
    removeEntireItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex(
        (item: CartProduct) => item.id === action.payload
      );

      state.splice(itemIndex, 1);
    },
  },
});

export const {
  addItem,
  incrementItem,
  decrementItem,
  removeEntireItem,
} = cartSlice.actions;

export default cartSlice.reducer;
