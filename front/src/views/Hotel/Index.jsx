import React from "react";
import { BannerInfoHotel } from "./components/bannerInfoHotel";
import { BannerDescripcion } from "./components/bannerDescripcion";
import { FotosHotel } from "./components/fotosHotel";
import { Habitaciones } from "./components/habitaciones";
import { BannerServicios } from "./components/bannerServicios";
import { Politicas } from "./components/politicas";
import { ReservaAhora } from "./components/reservaAhora";

export const Hotel = () => {
  return (
    <>
      <div>
        <BannerInfoHotel />
        <BannerDescripcion />
        <FotosHotel />
        <Habitaciones />
        <BannerServicios />
        <Politicas />
        <ReservaAhora />
      </div>
    </>
  );
};
