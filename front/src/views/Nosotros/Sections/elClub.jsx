import React from "react";
import { BannerNosotros } from "../components/bannerNosotros";
import { ContenidoElCLub } from "../components/contenidoElCLub";

export const ElClub = () => {
  return (
    <>
      <div className=" w-full">
        <BannerNosotros />
        <ContenidoElCLub />
      </div>
    </>
  );
};
