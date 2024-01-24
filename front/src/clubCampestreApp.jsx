import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/appRouter";
import { Menu } from "./components/Menu";

export const ClubCampestreApp = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
