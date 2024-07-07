import React, { useState } from "react";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import { galeriaDeportes } from "../utils/deportesData";
import "../style/instalaciones.css";

export const EscuelasDeportivas = () => {
  const [atencionSocio, setAtencionSocio] = useState(false);
  const [verHorarios, setVerHorarios] = useState(false);

  return (
    <>
      <div className=" flex justify-center items-center sm:max-md:items-start pt-10 flex-col animate__animated animate__fadeIn ">
        <img
          src="https://i.ibb.co/QpTzKrr/escuelas-Deportivas.png"
          alt="escuelas-Deportivas"
          border="0"
        ></img>
        <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[10rem] "></div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-5">
          <div className=" px-[16rem] text-justify py-4 text-wrap text-white md:max-xl:px-[8rem] sm:max-md:px-1 ">
            <p>
              ¡Descubre un mundo de oportunidades deportivas en el{" "}
              <strong>Club Campestre de Neiva!</strong> <br />
              <br /> Nuestro club ofrece una amplia gama de Escuelas Deportivas
              para satisfacer todas las pasiones atléticas de los hijos de
              nuestros socios desde los 3 hasta los 14 años y de adultos quienes
              también se benefician de unas horas de entrenamiento en compañía
              de profesores expertos en cada deporte. Desde el emocionante mundo
              del fútbol hasta la precisión del tenis, el encanto del golf y la
              frescura de la natación, tenemos algo para todos. <br />
              <br />
              De martes a domingo, tendrás la oportunidad de sumergirte en las
              aguas refrescantes de nuestras piscinas perfeccionando tus
              habilidades de natación, o sintiendo la adrenalina en nuestras
              canchas de fútbol mientras te conviertes en un verdadero campeón
              dentro del campo.
              <br />
              <br /> Para aquellos que buscan el equilibrio y la concentración,
              nuestras clases de tenis ofrecen la oportunidad de mejorar tu
              juego bajo la guía de instructores expertos. Y si buscas desafíos
              más intensos,{" "}
              <strong>
                ¡nuestro programa de taekwondo te llevará a nuevas alturas de
                disciplina y destreza física!
              </strong>
              <br />
              <br /> Así mismo, para aquellos que prefieren deslizarse sobre
              ruedas, el patinaje es una opción emocionante que ofrecemos. Y
              para los amantes del baloncesto y el vóley playa, contamos con
              instalaciones de primer nivel donde puedes disfrutar de estos
              deportes en un ambiente divertido y estimulante.
              <br />
              <br /> En el <strong>Club Campestre de Neiva</strong>, estamos
              comprometidos con brindarte las mejores oportunidades deportivas
              para que puedas alcanzar tus metas y disfrutar al máximo de tu
              pasión por el deporte.{" "}
              <strong>
                ¡Únete a nosotros y haz de cada día una nueva aventura en el
                mundo del deporte!
              </strong>
            </p>
          </div>
          <div className=" grid grid-cols-2 px-[16rem]  py-10 sm:max-md:px-1 sm:max-md:grid-cols-1 sm:max-md:gap-5">
            <div className=" flex justify-center items-center">
              <button
                onClick={() => {
                  setAtencionSocio(false);
                  setVerHorarios(true);
                }}
                className=" bg-amber-400 px-3 py-2 rounded-lg font-AltoneBold shadow-md shadow-gray-950 hover:bg-amber-600 hover:shadow transition-all ease-in-out"
              >
                Ver Horarios
              </button>
            </div>
            <div className=" flex justify-center items-center">
              <button
                onClick={() => {
                  setAtencionSocio(true);
                  setVerHorarios(false);
                }}
                className=" bg-amber-400 px-3 py-2 rounded-lg font-AltoneBold shadow-md shadow-gray-950 hover:bg-amber-600 hover:shadow transition-all ease-in-out"
              >
                Atención a Socios
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            {atencionSocio && (
              <img
                src="https://i.ibb.co/3NbbhH8/6-HORARIO-ATENCI-N-A-SOCIOS.jpg"
                alt="Horario de atencion club campestre"
                border="0"
                className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
              />
            )}
            {verHorarios && (
              <div className=" flex flex-row gap-4 sm:max-md:grid sm:max-md:grid-rows-2">
                <img
                  src="https://i.ibb.co/tQV4KfT/5-VER-HORARIO-DEPORTES.jpg"
                  alt="horario escuelas club campestre"
                  border="0"
                  className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
                />
                <img
                  src="https://i.ibb.co/J3xL9ZG/4-VER-HORARIO-DEPORTES.jpg"
                  alt="horario escuelas club campestre"
                  border="0"
                  className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
                />
              </div>
            )}
          </div>
          <div className="flex flex-wrap flex-col px-[16rem] md:max-xl:px-[8rem] justify-start items-center sm:max-md:px-1 md:px-[8rem] ">
            <h1 className="text-white font-AltoneBold text-4xl pb-3 pt-10">
              Nuestros Deportes
            </h1>
            <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[10rem] "></div>
            <div className=" flex flex-col ">
              {galeriaDeportes.map((deporte) => (
                <div className=" pt-7">
                  <div>
                    {
                      <h3 className=" text-white font-AltoneBold text-4xl pb-3">
                        {deporte.titulo}
                      </h3>
                    }
                  </div>
                  <RViewer imageUrls={deporte.imagenes}>
                    <div className=" grid grid-cols-5 sm:max-md:grid-cols-2 md:max-xl:grid-cols-4 lg:grid-cols-3 gap-3 pb-8">
                      {deporte.imagenes.map((imagen, indexa) => (
                        <RViewerTrigger index={indexa}>
                          <img
                            src={imagen}
                            alt={`Deporte ${deporte.titulo} club campestre`}
                            className="w-full h-64 object-cover  shadow-md cursor-pointer rounded-md border-2 border-white"
                          />
                        </RViewerTrigger>
                      ))}
                    </div>
                  </RViewer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
