import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/instalaciones.css";
import { imagesCapilla } from "../utils/capillaData";

export const Capilla = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className=" flex justify-center items-center pt-10 flex-col">
          <img
            src="https://clubcampestreneiva.site/IMG/Titulos/la-capilla.png"
            alt="Sin-t-tulo-5"
            border="0"
          />
          <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] pb-[5rem] sm:max-md:px-1 sm:max-md:py-1 sm:max-md:pb-20 ">
          <div className=" px-[23rem] md:px-48 text-justify pb-8 text-wrap text-white sm:max-md:px-4 sm:max-md:py-4">
            <p>
              La <strong>Capilla Nuestra Señora de Guadalupe</strong> del Club
              Campestre de Neiva, ofrece a los feligreses la oportunidad de
              reafirmar su Fe y vivir los eventos religiosos más importantes con
              enorme comodidad y confort. <br /> <br />
              Es una de las preferidas en la región para bodas, bautizos y
              comuniones, la capilla cuenta con su propio capellán, tiene aire
              acondicionado y capacidad para 60 personas en interior con
              posibilidad de expansión en el exterior de más de 100 personas.
            </p>
          </div>
          <p className=" pt-10 text-white font-AltoneBold text-4xl text-center ">
            Galería
          </p>
          <div className=" flex justify-center items-center  sm:max-md:px-1 animate__animated animate__fadeIn">
            <ImageGallery
              showIndex={true}
              items={imagesCapilla}
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
