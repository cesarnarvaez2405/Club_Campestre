import React from "react";
import { BannerNosotros } from "../components/bannerNosotros";
import { ContenidoInstalaciones } from "./Components/contenidoInstalaciones";

export const Servicios = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <BannerNosotros titulo={"Servicios"} componente={"instalaciones"} />
        <ContenidoInstalaciones />
      </div>
    </>
  );
};
