import React from "react";
import { BannerNosotros } from "../components/bannerNosotros";
import { ContenidoInstalaciones } from "../components/contenidoInstalaciones";

export const Instalaciones = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <BannerNosotros
          titulo={"Nuestras Instalaciones"}
          componente={"instalaciones"}
        />
        <ContenidoInstalaciones />
      </div>
    </>
  );
};
