import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/appRouter";
import { Menu } from "./components/Menu";
import { Provider } from "react-redux";
import { store } from "./store";

export const ClubCampestreApp = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Menu key="menu" />
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </>
  );
};
