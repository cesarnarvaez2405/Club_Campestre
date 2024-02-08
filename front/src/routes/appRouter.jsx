import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home/Index";
import { Nosotros } from "../views/Nosotros/Index";
import { ElClub } from "../views/Nosotros/Sections/elClub";
import { Instalaciones } from "../views/Nosotros/Sections/instalaciones";
import { Eventos } from "../views/Eventos/Index";
import { Convenios } from "../views/Convenios/Index";
import { Hotel } from "../views/Hotel/Index";
import { Spa } from "../views/Spa/Index";
import { Login } from "../views/Plataforma/modules/Login/index";
import { useAuthUtils } from "../hooks/Utils/useAuthUtils";
import { Inicio } from "../views/Plataforma/modules/Inicio/Index";

export const AppRouter = () => {
  const { checkAuthToken, status } = useAuthUtils();

  useEffect(() => {
    checkAuthToken();
  }, []);
  if (status === "checking") {
    return <h3>Cargando ...</h3>;
  }

  return (
    <>
      <Routes>
        {status === "no autenticado" ? (
          <>
            <Route path="/plataforma/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/plataforma/inicio" element={<Inicio />} />
          </>
        )}
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
