import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/instalaciones.css";
import { galeriaPiscinas } from "../utils/instalacionPisicinas";

export const InstalacionPiscinas = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className=" flex justify-center items-center pt-10 flex-col">
          <img
            src="https://i.ibb.co/SRPShQM/piscinas-YTobogan.png"
            alt="piscinas-YTobogan"
            border="0"
          ></img>
          <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-1 ">
          <div className=" px-[23rem] text-justify py-4 text-wrap text-white sm:max-md:px-5">
            <p>
              El clima de nuestra región, hace que las piscinas sean uno de
              nuestros mayores atractivos si de pasarla a gusto en familia se
              trata. Con un total de tres piscinas, las cuales gozan de total
              seguridad y normas de higiene, el Club Campestre de Neiva,
              complace día a día a sus visitantes con una excelente opción para
              refrescarse.
              <br /> En nuestro Club, además de piscinas especiales para todas
              las edades, también hay un divertido tobogán, que hace de las
              visitas al Club un paseo inolvidable.
            </p>
          </div>
          <p className=" pt-10 text-white font-AltoneBold text-4xl text-center ">
            Galería
          </p>
          <div className=" flex justify-center items-center  sm:max-md:px-1 animate__animated animate__fadeIn">
            <ImageGallery
              showIndex={true}
              items={galeriaPiscinas}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={900}
              slideInterval={5000}
              showThumbnails={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};
