import React, { useEffect, useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../views/Home/Index";
import { ElClub } from "../views/Nosotros/ElClub/index";
import { Servicios } from "../views/Nosotros/Servicios/index";
import { Eventos } from "../views/Eventos/Index";
import { Convenios } from "../views/Convenios/Index";
import { Hotel } from "../views/Hotel/Index";
import { Spa } from "../views/Spa/Index";
import { Login } from "../views/Plataforma/modules/Login/index";
import { useAuthUtils } from "../hooks/Utils/useAuthUtils";
import { Inicio } from "../views/Plataforma/modules/Inicio/Index";
import { DotsLoading } from "../components/DotsLoading";
import { NoticiaDetalle } from "../views/Noticias/Partials/noticiaDetalle";

export const AppRouter = () => {
  const { checkAuthToken, status } = useAuthUtils();
  const { pathname } = useLocation();

  useEffect(() => {
    checkAuthToken();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (status === "checking") {
    return (
      <>
        <div className="flex items-center justify-center w-full h-screen bg-gray-400 ">
          <div className="flex flex-col items-center justify-center ">
            <img
              src="https://i.ibb.co/qY6Z6k1/Logo-club.png"
              alt="Logo-club"
              border="0"
              className="object-contain h-48 bg-center"
            ></img>
            <div className="flex gap-3 ">
              <DotsLoading />
            </div>
          </div>
        </div>
      </>
    );
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
            <Route path="/*" element={<Navigate to="/plataforma/inicio" />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        {/* <Route path="/nosotros" element={<Nosotros />} /> */}
        <Route path="/nosotros/el-club" element={<ElClub />} />
        <Route path="/nosotros/servicios" element={<Servicios />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/noticia/:id/:titulo" element={<NoticiaDetalle />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
