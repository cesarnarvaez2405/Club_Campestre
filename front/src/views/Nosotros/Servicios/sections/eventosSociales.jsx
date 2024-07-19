import React, { useEffect, useState } from "react";
import "../style/instalaciones.css";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import { salones } from "../utils/salonesData";
import { ImagenSlider } from "../../../../components/ImagenSlider";

export const EventosSociales = () => {
  const [imagenesSalones, setImagenesSalones] = useState([]);

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className=" flex justify-center items-center pt-10 flex-col sm:max-md:pt-16">
          <img
            src="https://i.ibb.co/dpgQ9TD/titulo-Evento-Sociales23png.png"
            alt="Logo-club"
            border="0"
            className=" "
          ></img>
          <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] ">
          <div className=" px-[16rem] md:max-xl:px-[8em]  text-justify py-4 text-wrap text-white sm:max-md:px-1">
            <p>
              Los <strong>Salones sociales </strong> de nuestro Club, gozan de
              gran preferencia en toda la región,tenemos un total de ocho
              salones, se pueden atender eventos de hasta 2.000 personas en
              simultáneo, lo que sin duda es un gran honor. <br />
              <br /> Para ello, contamos con gran variedad a la hora de la
              decoración de nuestros sitios de recepción, los cuales hemos
              bautizado con los nombres de Salón Principal, que posee a su vez
              el salón Azul y Cincuentenario, el salón La Espantosa, Guinness,
              Presidente y Salón de televisión y otros. <br />
              <br />
              En nuestros salones sociales, se puede disfrutar de mucha
              elegancia, sobriedad o privacidad, dependiendo de las necesidades
              de quien haya elegido al Club Campestre de Neiva, para la
              realización de sus eventos y recepciones.
            </p>
          </div>
          <div className="flex flex-wrap justify-start px-[16rem] md:max-xl:px-[8rem] sm:max-md:px-0 ">
            {salones.map((salon, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/2 p-4 ">
                <div>
                  <ImagenSlider imagenes={salon.imagenes} />

                  <div className=" flex flex-col justify-center items-start">
                    <h2 className="text-2xl mb-2 font-thin text-white sm:max-md:text-xl">
                      {salon.nombre}
                    </h2>
                    <small className=" text-white">
                      ({salon.titulo} {salon.subTitulo})
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
