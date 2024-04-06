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
import { SpinnerLoading } from "../components/SpinnerLoading";
import { DotsLoading } from "../components/DotsLoading";
import { NoticiaDetalle } from "../views/Noticias/Partials/noticiaDetalle";

export const AppRouter = () => {
  const { checkAuthToken, status } = useAuthUtils();

  useEffect(() => {
    checkAuthToken();
  }, []);
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
        <Route path="/nosotros/ElClub" element={<ElClub />} />
        <Route path="/nosotros/servicios" element={<Instalaciones />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/noticia/:id" element={<NoticiaDetalle />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
