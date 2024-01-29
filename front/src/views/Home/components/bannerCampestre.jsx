import React, { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/16/solid";
import { infoBanner } from "../data/infoBanner";
import fondo from "../../../style/images/campoGolf.jpg";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const BannerCampestre = ({ desplazarBannerHotel }) => {
  const [posicionInfo, setPosicionInfo] = useState(0);

  const handleClickButtonRight = () => {
    if (posicionInfo < infoBanner.length - 1) {
      setPosicionInfo(posicionInfo + 1);
    }

    if (posicionInfo == infoBanner.length - 1) {
      setPosicionInfo(0);
    }
  };

  const handleClickButtonLeft = () => {
    const ultimaPosicion = infoBanner.length - 1;
    if (posicionInfo > 0) {
      setPosicionInfo(posicionInfo - 1);
    }

    if (posicionInfo == 0) {
      setPosicionInfo(ultimaPosicion);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleClickButtonRight, 10000);
    return () => clearInterval(intervalId);
  }, [posicionInfo]);

  return (
    <>
      <div className=" w-full 2xl:h-[50rem] xl:h-[40rem] lg:h-[40rem] bg-slate-600 z-10 flex top-0">
        <div className=" w-full h-full block z-20">
          <div
            className="bg-center bg-no-repeat bg-cover 2xl:h-[50rem] xl:h-[40rem] h-[40rem] brightness-[0.7] "
            style={{
              backgroundImage: `url(${fondo})`,
            }}
          ></div>
          <div className=" w-full 2xl:h-[25rem] lg:h-[20rem] absolute z-30 xl:top-[25%] top-[20%] ">
            <div className=" flex  items-center h-full justify-between mx-8">
              <div
                className=" order-first h-8 w-8 text-white cursor-pointer"
                onClick={handleClickButtonLeft}
              >
                <ChevronLeftIcon />
              </div>
              <div>
                <SwitchTransition>
                  <CSSTransition
                    classNames="fade"
                    key={infoBanner[posicionInfo].text}
                    addEndListener={(node, done) =>
                      node.addEventListener("transitionend", done, false)
                    }
                  >
                    <h3 className=" font-AltoneBold text-5xl text-white">
                      {infoBanner[posicionInfo].text}
                    </h3>
                  </CSSTransition>
                </SwitchTransition>
              </div>
              <div
                className=" order-last h-8 w-8 text-white cursor-pointer"
                onClick={handleClickButtonRight}
              >
                <ChevronRightIcon />
              </div>
            </div>
            <div className="  w-full h-[8rem] flex justify-center items-end ">
              <ChevronDoubleDownIcon
                className=" w-10 h-10 text-white cursor-pointer hover:opacity-30 transition-all ease-in-out duration-100"
                onClick={() => desplazarBannerHotel()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
