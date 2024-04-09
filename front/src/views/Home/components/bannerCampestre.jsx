import React, { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/16/solid";
import { infoBanner } from "../data/infoBanner";
import fondo from "../../../style/images/campoGolf.jpg";
// import videoFondo from "../../../style/images/secuencia.mp4";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { VideoYoutube } from "../../../components/videoYoutube";

export const BannerCampestre = ({ desplazarBannerHotel }) => {
  const [posicionInfo, setPosicionInfo] = useState(0);
  const videoFondo = "https://clubcampestreneiva.site/secuencia.mp4";

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
      <div className=' w-full 2xl:h-[50rem] xl:h-[40rem] lg:h-[40rem] bg-slate-600 z-10 flex top-0'>
        <div className='z-20 block w-full h-full '>
          <div className='relative w-full 2xl:h-[50rem] xl:h-[40rem] h-[40rem] overflow-hidden'>
            <video
              autoPlay
              loop
              muted
              controls={false}
              className='absolute top-0 left-0 min-w-full min-h-full object-cover brightness-[0.7]'
            >
              <source src={videoFondo} type='video/mp4' />
            </video>
            {/* <VideoYoutube videoId="ddxdGn9dRxQ" width={1980} height={1100} /> */}
          </div>
          <div className=' w-full 2xl:h-[25rem] lg:h-[20rem] absolute z-30 2xl:top-[25%] xl:top-[22%] lg:top-[25%] top-[45%] sm:max-md:top-[30%] '>
            <div className='flex items-center justify-between h-full mx-8 sm:max-md:mx-2 '>
              <div
                className='order-first w-8 h-8 text-white cursor-pointer '
                onClick={handleClickButtonLeft}
              >
                <ChevronLeftIcon />
              </div>
              <div>
                <SwitchTransition>
                  <CSSTransition
                    classNames='fade'
                    key={infoBanner[posicionInfo].text}
                    addEndListener={(node, done) =>
                      node.addEventListener("transitionend", done, false)
                    }
                  >
                    <h3 className='text-5xl text-white font-AltoneBold sm:max-md:text-lg '>
                      {infoBanner[posicionInfo].text}
                    </h3>
                  </CSSTransition>
                </SwitchTransition>
              </div>
              <div
                className='order-last w-8 h-8 text-white cursor-pointer '
                onClick={handleClickButtonRight}
              >
                <ChevronRightIcon />
              </div>
            </div>
            <div className='w-full h-[8rem] flex justify-center items-end sm:max-md:h-[15rem] '>
              <ChevronDoubleDownIcon
                className='w-10 h-10 text-white transition-all duration-100 ease-in-out cursor-pointer hover:opacity-30'
                onClick={() => desplazarBannerHotel()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
