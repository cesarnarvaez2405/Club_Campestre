import React from "react";
import { BannerNosotros } from "../components/bannerNosotros";
import { ContenidoElCLub } from "../components/contenidoElCLub";
import { Footer } from "../../../components/Footer";

export const ElClub = () => {
  return (
    <>
      <div className=" w-full flex flex-col">
        <BannerNosotros />
        <ContenidoElCLub />
        <Footer />
      </div>
    </>
  );
};
