import React from "react";
import { ImagenHoverMause } from "../Components/imagenHoverMause";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/instalaciones.css";
import { imagesGastro } from "../utils/gastrobarData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";

export const Gastrobar = () => {
  const videoFondo =
    "https://clubcampestreneiva.site/gastrobar_club_campestre.mp4";

  const imagenFondoGastrobar = {
    backgroundImage:
      'url("https://clubcampestreneiva.site/IMG/Coctel/confeti_3.png")',
  };

  return (
    <>
      <div
        className="animate__animated animate__fadeIn bg-fixed bg-cover bg-center flex flex-col justify-center items-center"
        style={imagenFondoGastrobar}
      >
        <div className=" flex justify-center items-center pt-10 flex-col sm:max-md:pt-20">
          <img
            src="https://i.ibb.co/mtzkw4J/gastrobar.png"
            alt="gastrobar_club_campestre"
            border="0"
          />
          <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[10rem]" />
        </div>

        <div className=" my-8 py-6 w-[60%] backdrop-brightness-125 backdrop-blur-md rounded-md">
          <div>
            {/* <div className="relative h-[10rem] z-20">
              <ImagenHoverMause
                src="https://clubcampestreneiva.site/IMG/Coctel/coctel.png"
                alt="Coctel Hover"
              />
            </div> */}
            <div>
              <div className=" z-10 flex flex-col justify-start items-center sm:pt-1 sm:pl-1 sm:col-start-1 sm:row-start-2 gap-4">
                <p className="text-white font-AltoneBold text-3xl text-center sm:pb-5">
                  ¡Conozca nuestro Nuevo Gastrobar!
                </p>
                <video
                  autoPlay
                  loop
                  muted
                  controls={true}
                  className="max-w-screen-sm max-h-screen object-cover border-2 border-white rounded-md shadow-lg shadow-black animate__animated animate__fadeIn"
                >
                  <source src={videoFondo} type="video/mp4" />
                </video>
                <ChevronDoubleDownIcon className=" h-16 w-16 text-white mt-10 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-32 py-10 flex flex-col justify-left items-center text-wrap text-white text-justify gap-8 col-start-2 col-span-2 sm:max-md:col-start-1  sm:max-md:row-start-1  sm:max-md:px-10  sm:max-md:pt-1">
        <p className=" px-32 text-lg">
          El nuevo <strong>Gastrobar del Club Campestre de Neiva</strong> es un
          vibrante espacio que combina la elegancia de un bar con la delicia de
          la gastronomía. Ofrece una amplia variedad de cócteles expertamente
          preparados, una amplia selección de licores y exquisitas picadas para
          satisfacer todos los paladares. Además, destaca por ser un lugar de
          entretenimiento donde los clientes pueden disfrutar de las
          transmisiones de algunos partidos y de divertidas sesiones de karaoke.
          Con una atmósfera acogedora y un servicio de primera clase, el
          gastrobar es el destino perfecto para disfrutar de una noche
          inolvidable entre amigos y familiares.
        </p>
        <p className=" pt-10 text-white font-AltoneBold text-4xl text-center ">
          Galería
        </p>
        <div className=" flex justify-center items-center px-20 sm:max-md:px-1 animate__animated animate__fadeIn">
          <ImageGallery
            items={imagesGastro}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideDuration={900}
            slideInterval={5000}
          />
        </div>
      </div>
    </>
  );
};
