import React, { createRef, useEffect, useState } from "react";
import { BannerCampestre } from "./components/bannerCampestre";
import { BannerHotel } from "./components/bannerHotel";
import { BannerSerSocio } from "../../components/BannerSerSocio";
import { SeccionNoticias } from "./components/seccionNoticias";
import { useNoticiasUtils } from "./hooks/useNoticiasUtils";
import { getFormatDate } from "../../utils/timeFormat";

export const Home = () => {
  const bannerHotelRef = createRef();
  const { obtenerNoticias } = useNoticiasUtils();

  const [noticias, Setnoticias] = useState([]);

  async function encontrarNoticias() {
    const noticias = await obtenerNoticias();
    noticias.map((noticia) => {
      noticia.fechaCreacion = getFormatDate(noticia.fechaCreacion);
      noticia.fechaModificacion = getFormatDate(noticia.fechaModificacion);
    });
    Setnoticias(noticias);
  }

  useEffect(() => {
    encontrarNoticias();
  }, []);

  const desplazarBannerHotel = () => {
    bannerHotelRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <BannerCampestre desplazarBannerHotel={desplazarBannerHotel} />
        <BannerHotel ref={bannerHotelRef} />
        <div className=" w-full 2xl:h-[20rem] h-[18rem] bg-white ">
          <BannerSerSocio />
        </div>
        <SeccionNoticias noticias={noticias} />
      </div>
    </>
  );
};
