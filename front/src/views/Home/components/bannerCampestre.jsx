import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { infoBanner } from "../data/infoBanner";

export const BannerCampestre = () => {
  const [posicionInfo, setPosicionInfo] = useState(0);

  return (
    <>
      <div className=" w-full xl:h-[50rem] lg:h-[45rem] bg-slate-600 z-10 absolute top-0">
        <div className=" w-full h-full absolute z-20">
          <h3>Fondo</h3>
          <div className=" w-full 2xl:h-[25rem] lg:h-[20rem] absolute z-30 xl:top-[25%] top-[20%] ">
            <div className=" flex  items-center h-full justify-between mx-8">
              <div
                className=" order-first h-8 w-8 text-white cursor-pointer"
                onClick={() => {
                  if (posicionInfo > 0) {
                    setPosicionInfo(posicionInfo - 1);
                  }
                }}
              >
                <ChevronLeftIcon />
              </div>
              <div>
                <h3 className=" font-AltoneBold text-5xl text-white">
                  {infoBanner[posicionInfo].text}
                </h3>
              </div>
              <div
                className=" order-last h-8 w-8 text-white cursor-pointer"
                onClick={() => {
                  if (posicionInfo < infoBanner.length - 1) {
                    setPosicionInfo(posicionInfo + 1);
                  }
                }}
              >
                <ChevronRightIcon />
              </div>
            </div>
            <div className=" bg-slate-900 w-full h-[10rem] "></div>
          </div>
        </div>
      </div>
    </>
  );
};
