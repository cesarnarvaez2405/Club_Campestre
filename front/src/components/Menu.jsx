import React from "react";
import { linkRutas } from "../routes/Rutas";
import { Link } from "react-router-dom";

const primerasRutas = linkRutas.slice(0, 3);
const ultimasRutas = linkRutas.slice(3, 7);

export const Menu = () => {
  return (
    <>
      <div className="w-full h-20 bg-slate-500">
        <div className="grid h-full grid-cols-9 ">
          {/* <div className="grid w-[80%] grid-cols-3 col-span-4 justify-items-end">
            {primerasRutas.map((ruta) => (
              <Link
                to={ruta.path}
                className="flex items-center justify-center duration-150 ease-in-out divide-x-2 rounded-md cursor-pointer hover:text-sky-900"
                key={ruta.name}
              >
                <h4>{ruta.title}</h4>
              </Link>
            ))}
          </div> */}

          <div className="flex flex-row justify-end w-full col-span-4 pl-10 ">
            {primerasRutas.map((ruta) => (
              <Link
                to={ruta.path}
                className="flex items-center px-10 duration-150 ease-in-out rounded-md cursor-pointer hover:text-sky-900"
                key={ruta.name}
              >
                <h4>{ruta.title}</h4>
              </Link>
            ))}
          </div>

          <div className="col-start-5 bg-slate-100"></div>
          <div className="flex flex-row justify-start w-full col-span-4 pl-10 ">
            {ultimasRutas.map((ruta) => (
              <Link
                to={ruta.path}
                className="flex items-center px-10 duration-150 ease-in-out rounded-md cursor-pointer hover:text-sky-900"
                key={ruta.name}
              >
                <h4>{ruta.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
