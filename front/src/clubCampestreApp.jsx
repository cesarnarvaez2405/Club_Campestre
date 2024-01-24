import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/appRouter";

export const ClubCampestreApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
