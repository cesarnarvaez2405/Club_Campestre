import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home/Index";
import { Nosotros } from "../views/Nosotros/Index";
import { ElClub } from "../views/Nosotros/Sections/elClub";
import { Instalaciones } from "../views/Nosotros/Sections/instalaciones";
import { Eventos } from "../views/Eventos/Index";
import { Convenios } from "../views/Convenios/Index";
import { Hotel } from "../views/Hotel/Index";
import { Spa } from "../views/Spa/Index";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/nosotros" element={<Nosotros />} /> */}
        <Route path="/nosotros/ElClub" element={<ElClub />} />
        <Route path="/nosotros/servicios" element={<Instalaciones />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
