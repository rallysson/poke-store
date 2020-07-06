import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const drawerSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openDrawer: (_state, action: PayloadAction<string>) => action.payload,
    closeDrawer: (state) => "",
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
