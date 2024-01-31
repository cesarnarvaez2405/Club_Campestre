import React, { createRef } from "react";
import { BannerCampestre } from "./components/bannerCampestre";
import { BannerHotel } from "./components/bannerHotel";
import { BannerSerSocio } from "../../components/BannerSerSocio";
import { SeccionNoticias } from "./components/seccionNoticias";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const bannerHotelRef = createRef();

  const desplazarBannerHotel = () => {
    bannerHotelRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="">
        <BannerCampestre desplazarBannerHotel={desplazarBannerHotel} />
        <BannerHotel ref={bannerHotelRef} />
        <div className=" w-full 2xl:h-[20rem] h-[18rem] bg-white ">
          <BannerSerSocio />
        </div>
        <SeccionNoticias />
        <Footer />
      </div>
    </>
  );
};
