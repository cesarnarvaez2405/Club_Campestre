import React from "react";
import { BannerInfoHotel } from "./components/bannerInfoHotel";
import { BannerDescripcion } from "./components/bannerDescripcion";
import { FotosHotel } from "./components/fotosHotel";
import { Habitaciones } from "./components/habitaciones";
import { Footer } from "../../components/Footer";
import { BannerServicios } from "./components/bannerServicios";

export const Hotel = () => {
  return (
    <>
      <div>
        <BannerInfoHotel />
        <BannerDescripcion />
        <FotosHotel />
        <BannerServicios />
        <Habitaciones />
        <Footer />
      </div>
    </>
  );
};
