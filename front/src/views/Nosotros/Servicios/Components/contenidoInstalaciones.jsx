import React, { useState } from "react";

import { menuServicios } from "../../../../utils/data";
import { EventosSociales } from "../sections/eventosSociales";
import { EscuelasDeportivas } from "../sections/escuelasDeportivas";
import { EscenariosDeportivos } from "../sections/escenariosDeportivos";
import { InstalacionPiscinas } from "../sections/instalacionPiscinas";
import { Restaurante } from "../sections/restaurante";
import { Guarderia } from "../sections/guarderia";
import { Capilla } from "../sections/capilla";
import { Gastrobar } from "../sections/gastrobar";
import { Gimnasio } from "../sections/gimnasio";

export const ContenidoInstalaciones = () => {
  const [opcionServicio, setOpcionServicio] = useState(0);

  return (
    <>
      <div className=" w-full h-full bg-zinc-800  ">
        <div className=" w-full h-16 divide-x divide-amber-300 py-2 2xl:px-[10rem] lg:px-[3px] grid grid-cols-9 justify-center items-center sm:max-md:grid-cols-3 sm:max-md:grid-row-3 sm:max-md:gap-3 sm:max-md:h-24 sm:max-md:px-2 sm:max-md:py-5 animate__animated animate__fadeIn  ">
          {menuServicios.map((servicio, index) => (
            <button
              onClick={() => setOpcionServicio(servicio.id)}
              key={index}
              className={`h-full  flex justify-center items-center font-AltoneNormal xl:text-sm text-xs text-white hover:text-amber-300 hover:bg-gray-600 duration-150 ease-in-out cursor-pointer text-wrap  ${
                opcionServicio === servicio.id && "border-b"
              }`}
            >
              <span>{servicio.titulo} </span>
            </button>
          ))}
        </div>
        {opcionServicio == 0 && <EventosSociales />}
        {opcionServicio === 1 && <EscuelasDeportivas />}
        {opcionServicio === 2 && <EscenariosDeportivos />}
        {opcionServicio === 3 && <InstalacionPiscinas />}
        {opcionServicio === 4 && <Restaurante />}
        {opcionServicio === 5 && <Guarderia />}
        {opcionServicio === 6 && <Capilla />}
        {opcionServicio === 7 && <Gastrobar />}
        {opcionServicio === 8 && <Gimnasio />}
      </div>
    </>
  );
};
