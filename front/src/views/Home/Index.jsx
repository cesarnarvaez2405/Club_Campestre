import React, { createRef, useEffect, useState } from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
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
        <div className=" w-full 2xl:h-[20rem] h-[18rem] bg-white sm:max-md:h-[30rem]   ">
          <BannerSerSocio />
        </div>
        <SeccionNoticias noticias={noticias} />
      </div>
      <div className="fixed z-40 flex flex-col gap-2 top-52 right-4">
        <a
          href="https://www.facebook.com/clubcampestredeneiva?locale=es_LA"
          target="_blank"
          rel="noreferrer"
          className="p-2 text-white bg-blue-600 rounded-full"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@clubcampestreneiva"
          target="_blank"
          rel="noreferrer"
          className="p-2 text-white bg-black rounded-full"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.instagram.com/clubcampestreneiva/"
          target="_blank"
          rel="noreferrer"
          className="p-2 text-white bg-pink-500 rounded-full"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
};
