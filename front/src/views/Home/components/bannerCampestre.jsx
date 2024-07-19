import React, { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/16/solid";
import { infoBanner } from "../data/infoBanner";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const BannerCampestre = ({ desplazarBannerHotel }) => {
  const [posicionInfo, setPosicionInfo] = useState(0);

  const videosFondo = [
    {
      src: "https://clubcampestreneiva.site/Lago_Club_Campestre_1080P.mp4",
      title: "Video del lago del Club Campestre de Neiva",
    },
    {
      src: "https://clubcampestreneiva.site/Campo_Golf_1080P.mp4",
      title: "Video del campo de Golf Club Campestre Neiva",
    },
    {
      src: "https://clubcampestreneiva.site/Cancha_Multiple_1080P.mp4",
      title: "Video de la Cancha Multiple Club Campestre Neiva",
    },
    {
      src: "https://clubcampestreneiva.site/Piscina_Club_Campestre_1080P.mp4",
      title: "Video de la Piscina Club Campestre Neiva",
    },
    {
      src: "https://clubcampestreneiva.site/Canchas_Tenis_Club_Campestre_Neiva_1080P.mp4",
      title: "Video de las Canchas de tenis del Club Campestre de Neiva",
    },
  ];

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
    const intervalId = setInterval(handleClickButtonRight, 5700);
    return () => clearInterval(intervalId);
  }, [posicionInfo]);

  return (
    <>
      <div className=" w-full 2xl:h-[50rem] xl:h-[40rem] lg:h-[40rem] bg-black z-10 flex top-0">
        <div className="z-20 block w-full h-full ">
          <div className="relative w-full 2xl:h-[50rem] xl:h-[40rem] h-[40rem] overflow-hidden">
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={videosFondo[posicionInfo].title}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="absolute top-0 left-0 min-w-full min-h-full object-cover brightness-[0.7]"
                >
                  <source
                    src={videosFondo[posicionInfo].src}
                    type="video/mp4"
                  />
                </video>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className=" w-full 2xl:h-[25rem] lg:h-[20rem] absolute z-30 2xl:top-[25%] xl:top-[24%] lg:top-[18%] md:top-[30%] top-[45%] sm:max-md:top-[30%] ">
            <div className="flex items-center justify-between h-full mx-8 sm:max-md:mx-2 ">
              <div
                className="order-first w-8 h-8 text-white cursor-pointer "
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
                    <h3 className="2xl:text-5xl lg:text-3xl md:text-2xl text-white font-AltoneBold sm:text-lg  ">
                      {infoBanner[posicionInfo].text}
                    </h3>
                  </CSSTransition>
                </SwitchTransition>
              </div>
              <div
                className="order-last w-8 h-8 text-white cursor-pointer "
                onClick={handleClickButtonRight}
              >
                <ChevronRightIcon />
              </div>
            </div>
            <div className="w-full h-[4rem] flex justify-center items-end max-lg:h-[10rem] sm:max-md:h-[15rem] ">
              <ChevronDoubleDownIcon
                className="w-10 h-10 text-white transition-all duration-100 ease-in-out cursor-pointer hover:opacity-30"
                onClick={() => desplazarBannerHotel()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
