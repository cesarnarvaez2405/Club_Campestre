import { configureStore } from "@reduxjs/toolkit";
import { autenticacion } from "./store/Auth/Autenticacion";
import { seleccionadorMenu } from "./store/Auth/menuStore";

export const store = configureStore({
  reducer: {
    auth: autenticacion.reducer,
    menu: seleccionadorMenu.reducer,
  },
});
