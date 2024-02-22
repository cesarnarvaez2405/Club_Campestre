import React from "react";
import { BannerNosotros } from "../components/bannerNosotros";
import { ContenidoInstalaciones } from "../components/contenidoInstalaciones";
import { Footer } from "../../../components/Footer";

export const Instalaciones = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <BannerNosotros titulo={"Servicios"} componente={"instalaciones"} />
        <ContenidoInstalaciones />
        <Footer />
      </div>
    </>
  );
};
