import { configureStore } from "@reduxjs/toolkit";
import { autenticacion } from "./store/Auth/Autenticacion";

export const store = configureStore({
  reducer: {
    auth: autenticacion.reducer,
  },
});
