import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/appRouter";
import { Menu } from "./components/Menu";
import { Provider } from "react-redux";
import { store } from "./store";
import { Footer } from "./components/Footer";

export const ClubCampestreApp = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};
