import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const ImagenSlider = ({ imagenes }) => {
  const [posicion, setPosicion] = useState(0);

  const handleClickButtonLeft = () => {
    const ultimaPosicion = imagenes.length - 1;
    if (posicion > 0) {
      setPosicion(posicion - 1);
    }

    if (posicion == 0) {
      setPosicion(ultimaPosicion);
    }
  };

  const handleClickButtonRight = () => {
    if (posicion < imagenes.length - 1) {
      setPosicion(posicion + 1);
    }

    if (posicion == imagenes.length - 1) {
      setPosicion(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleClickButtonRight, 5700);
    return () => clearInterval(intervalId);
  }, [posicion]);

  return (
    <>
      <div className="h-96 relative z-10 flex">
        <div className="relative w-full h-full overflow-hidden">
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key="Imagenes club campestre"
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <img
                src={imagenes[posicion]}
                alt="Imagenes"
                className="w-full h-full object-cover"
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-40 flex items-center justify-between px-2">
          <div
            className="order-first w-8 h-8 text-white cursor-pointer"
            onClick={handleClickButtonLeft}
          >
            <ChevronLeftIcon />
          </div>
          <div
            className="order-last w-8 h-8 text-white cursor-pointer"
            onClick={handleClickButtonRight}
          >
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};
