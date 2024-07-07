import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/instalaciones.css";
import { imagesGuarderia } from "../utils/guarderiaData";

export const Guarderia = () => {
  return (
    <>
      <div className=" flex justify-center items-center pt-10 flex-col animate__animated animate__fadeIn">
        <img
          src="https://i.ibb.co/njtPPzM/sede-Infantil.png"
          alt="sede-Infantil"
          border="0"
        ></img>
        <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[10rem] "></div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-1 ">
          <div className=" px-[23rem] md:px-48 text-justify py-4 text-wrap text-white sm:max-md:px-5">
            <p>
              Gracias a este servicio, en el cual la prioridad son los más
              pequeños de la casa, tenemos diferentes locaciones y actividades
              para que los niños se diviertan y adquieran nuevos conocimientos
              de manera segura y muy entretenida.
            </p>
          </div>

          <div className=" flex justify-center items-center animate__animated animate__fadeIn">
            <ImageGallery
              items={imagesGuarderia}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={1000}
              slideInterval={5000}
            />
          </div>
        </div>
      </div>
    </>
  );
};
