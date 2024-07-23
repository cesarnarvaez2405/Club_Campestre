import React, { useEffect, useState } from "react";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import { galeriaEscenariosDeportivos } from "../utils/escenariosDeportivosData";
import "../style/instalaciones.css";
import { ImagenSlider } from "../../../../components/ImagenSlider";

export const EscenariosDeportivos = () => {
  const [imagenesEscenarios, setImagenesEscenarios] = useState([]);

  useEffect(() => {
    const nuevasImagenesEscenarios = galeriaEscenariosDeportivos.map(
      (escenario) => escenario.imagen
    );
    setImagenesEscenarios(nuevasImagenesEscenarios);
  }, []);

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className=" flex justify-center items-center pt-10 flex-col">
          <img
            src="https://i.ibb.co/C0r5k5H/escenarios-Depor.png"
            alt="escenarios-Depor"
            border="0"
          ></img>
          <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-1 ">
          <div className=" px-[23rem] md:px-48 text-justify py-4 text-wrap text-white sm:max-md:px-4">
            <p>
              Nuestros escenarios deportivos, resultan ideales para practicar
              actividades deportivas como <strong>Fútbol, Tenis y Golf</strong>,
              que son los de mayor número de seguidores en el Club.
              <br />
              <br /> Contamos con un total de 8 canchas de tenis donde se juega
              este deporte en tierra batida, y 4 campos de Fútbol que no tienen
              nada que envidiarle a los mejores del país, pues su grama siempre
              se encuentra en óptimas condiciones.
              <br />
              <br /> Nuestro campo de golf, además de ser el único y el mejor
              del sur de Colombia, se encuentra al nivel de los mejores del
              país, permitiendo que quienes disfrutan de este deporte puedan
              pasar estupendas jornadas. <br /> Con más de 30 hectáreas de
              césped cien por ciento natural y 18 Hoyos de juego, este campo de
              Golf que está reglamentado por la Federación Nacional de Golf, ha
              servido como escenario de eventos deportivos de talla Nacional.
            </p>
          </div>
          <div className=" flex justify-center items-center py-5">
            <div className=" w-[70%] sm:max-md:w-[80%] ">
              <div className=" grid grid-cols-2 justify-center items-center py-[2rem] sm:max-md:grid-cols-1">
                {galeriaEscenariosDeportivos.map((escenario, index) => (
                  <div className=" flex flex-col gap-2  pr-5 py-6" key={index}>
                    <p className=" text-2xl mb-2 font-thin text-white">
                      {escenario.titulo}
                    </p>
                    <ImagenSlider imagenes={escenario.imagenes} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
