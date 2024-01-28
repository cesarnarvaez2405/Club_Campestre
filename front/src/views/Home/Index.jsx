import React from "react";
import { BannerCampestre } from "./components/bannerCampestre";
import { BannerHotel } from "./components/bannerHotel";

export const Home = () => {
  return (
    <>
      <div className=" w-screen h-screen">
        <BannerCampestre />
        <div>
          <BannerHotel />
        </div>
      </div>
    </>
  );
};
