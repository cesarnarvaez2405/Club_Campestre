import React from "react";
import { BannerCampestre } from "./components/bannerCampestre";
import { BannerHotel } from "./components/bannerHotel";
import { BannerSerSocio } from "../../components/BannerSerSocio";

export const Home = () => {
  return (
    <>
      <div className=" w-screen h-screen">
        <BannerCampestre />
        <BannerHotel />
        <div className=" w-full 2xl:h-[20rem] h-[18rem] bg-white ">
          <BannerSerSocio />
        </div>
      </div>
    </>
  );
};
