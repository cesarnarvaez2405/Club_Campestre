import { createSlice } from "@reduxjs/toolkit";

export const seleccionadorMenu = createSlice({
  name: "menu",
  initialState: {
    nameMenu: "home",
  },
  reducers: {
    onSelect: (state, { payload }) => {
      state.nameMenu = payload;
    },
  },
});

export const { onSelect } = seleccionadorMenu.actions;
