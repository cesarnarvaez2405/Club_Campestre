import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/instalaciones.css";
import { imagesGimnasio } from "../utils/gimnasioData";

export const Gimnasio = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className=" flex justify-center items-center pt-10 flex-col">
          <img
            src="https://clubcampestreneiva.site/IMG/Titulos/Gimnasio.png"
            alt="Sin-t-tulo-5"
            border="0"
          />
          <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] pb-[5rem] sm:max-md:px-1 sm:max-md:py-1 sm:max-md:pb-20 ">
          <div className=" px-[23rem] md:px-48 text-justify pb-8 text-wrap text-white sm:max-md:px-4">
            <p>
              Contamos con un <strong>gimnasio</strong> de fuerza dotado con lo
              necesario para hacer sus entrenamientos amenos, el salón cuenta
              con aire acondicionado, espejos, máquinas de fuerza, elípticas,
              bicicletas y otros elementos para los entrenamientos diarios de
              nuestros socios y socias.
            </p>
          </div>

          <div className=" flex justify-center items-center sm:max-md:w-[22rem] animate__animated animate__fadeIn">
            <ImageGallery
              items={imagesGimnasio}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={600}
              slideInterval={5000}
            />
          </div>
        </div>
      </div>
    </>
  );
};
