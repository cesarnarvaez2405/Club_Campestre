import { createSlice } from "@reduxjs/toolkit";

export const autenticacion = createSlice({
  name: "autenticacion",
  initialState: {
    status: "checking", // Esta revisando si esta autenticado o no
    user: {}, // Informacion del usuario
    errorMessage: undefined,
  },
  reducers: {
    checking: (state) => {
      (state.status = "checking"), (state.user = {});
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      (state.status = "autenticado"),
        (state.user = payload),
        (state.errorMessage = undefined);
    },
    onLogout: (state, { payload }) => {
      (state.status = "no autenticado"),
        (state.user = {}),
        (state.errorMessage = payload);
    },
  },
});

export const { checking, onLogin, onLogout } = autenticacion.actions;
