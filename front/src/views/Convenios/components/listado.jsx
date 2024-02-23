import React, { useState } from "react";
import { convenios } from "../../../utils/conveniosData";
import { ListaDeClubes } from "./listaDeClubes";
import { menuCanjes } from "../../../utils/data";

export const Listado = () => {
  const [ciudadCanje, setCiudadCanje] = useState("bogota");
  return (
    <>
      <div>
        <div className=" w-full flex flex-col gap-4 justify-center items-center py-16">
          <h2 className=" text-xl font-thin italic">
            El Club Campestre de Neiva tiene convenios con los mejores clubes
            nacionales
          </h2>
          <h2 className=" font-semibold text-xl">Lista de Clubes</h2>
          <div className="border-t border-amber-300 w-[20rem] mt-3 pb-6"></div>
          <div className=" w-full h-16 divide-x gap-4  py-2 2xl:px-[16rem] lg:px-[2rem] grid grid-cols-7 justify-center items-center ">
            {menuCanjes.map((servicio, index) => (
              <button
                onClick={() => setCiudadCanje(servicio.id)}
                key={index}
                className={`h-full py-2 bg-slate-200 flex justify-center rounded-md items-center font-AltoneNormal xl:text-sm text-xs text-black hover:text-amber-300 hover:bg-gray-600 duration-150 ease-in-out cursor-pointer text-wrap  ${
                  ciudadCanje === servicio.id && "bg-slate-400"
                }`}
              >
                <span>{servicio.id} </span>
              </button>
            ))}
          </div>
          <ListaDeClubes convenios={convenios} ciudad={ciudadCanje} />
        </div>
      </div>
    </>
  );
};
