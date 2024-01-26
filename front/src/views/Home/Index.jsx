import React from "react";
import { BannerCampestre } from "./components/bannerCampestre";

export const Home = () => {
  return (
    <>
      <div className=" w-full flex flex-col">
        <div>
          <BannerCampestre />
        </div>
      </div>
    </>
  );
};
