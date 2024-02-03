import React from "react";
import futbol from "../../../style/images/futbol.jpg";
import golf from "../../../style/images/golf.jpg";
import tenis from "../../../style/images/tenis.jpg";
import natacion from "../../../style/images/natacion.jpg";

export const ContenidoInstalaciones = () => {
  const deportes = [
    {
      nombre: "Futbol",
      imagen: futbol,
    },
    {
      nombre: "Golf",
      imagen: golf,
    },
    {
      nombre: "Tenis",
      imagen: tenis,
    },
    {
      nombre: "Natacion",
      imagen: natacion,
    },
  ];

  return (
    <>
      <div className=" w-full h-[60rem] bg-zinc-800 ">
        <div className=" flex justify-center items-center pt-10 flex-col">
          <span className=" font-AltoneNormal text-3xl text-white">
            Deportes
          </span>
          <div className="border-t border-amber-300 w-[20rem] mt-3 "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[4rem] ">
          <div className="flex flex-wrap justify-start">
            {deportes.map((deporte, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded shadow p-6">
                  <img
                    src={deporte.imagen}
                    alt={deporte.nombre}
                    className="w-full h-64 object-cover mb-4 rounded"
                  />
                  <h2 className="text-2xl font-bold mb-2">{deporte.nombre}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
