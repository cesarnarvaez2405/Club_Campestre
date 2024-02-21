import React, { useState } from "react";
import { linkRutas } from "../routes/Rutas";
import { Link } from "react-router-dom";
import { useAuthUtils } from "../hooks/Utils/useAuthUtils";

const primerasRutas = linkRutas.slice(0, 3);
const ultimasRutas = linkRutas.slice(3, 7);

export const Menu = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { status } = useAuthUtils();
  return (
    <>
      {status === "no autenticado" && (
        <div className="absolute z-50 w-full h-36 ">
          <div className="grid h-full grid-cols-9">
            <div className="flex flex-row justify-end w-full col-span-4 pr-10">
              {primerasRutas.map((ruta) => (
                <div
                  key={ruta.name}
                  onMouseEnter={() => setOpenSubMenu(ruta.name)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                >
                  <Link
                    to={ruta.path}
                    className="flex items-center px-10 text-white duration-150 ease-in-out border-l-2 cursor-pointer my-14 border-x-amber-300 hover:text-sky-900 font-AltoneNormal"
                  >
                    <h4>{ruta.title}</h4>
                  </Link>
                  {ruta.subMenu && ruta.name === openSubMenu && (
                    <div className=" absolute w-[10rem] font-AltoneNormal text-white backdrop-blur-xl pb-4 top-[60%] px-2  ">
                      {ruta.subMenu.map((subRuta, index) => (
                        <div className="pt-4 border-b border-amber-300">
                          <Link
                            to={subRuta.path}
                            className=" hover:opacity-65"
                            key={index}
                          >
                            <h4 key={subRuta.title}>{subRuta.title}</h4>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center col-start-5">
              <img
                src="https://i.ibb.co/qY6Z6k1/Logo-club.png"
                alt="Logo-club"
                border="0"
                className="h-32"
              ></img>
            </div>
            <div className="flex flex-row justify-start w-full col-span-4 pl-10">
              {ultimasRutas
                .filter((ruta) => ruta.estaRegistrado === undefined)
                .map((ruta) => (
                  <div
                    key={ruta.name}
                    onMouseEnter={() => setOpenSubMenu(ruta.name)}
                    onMouseLeave={() => setOpenSubMenu(null)}
                  >
                    <Link
                      key={ruta.name}
                      to={ruta.path}
                      className="flex items-center px-10 text-white duration-150 ease-in-out border-r-2 cursor-pointer my-14 border-x-amber-300 hover:text-sky-900 font-AltoneNormal"
                    >
                      <h4>{ruta.title}</h4>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {status === "autenticado" && (
        <div className="absolute z-50 w-full h-36">
          <div className="flex items-center justify-center pt-3 ">
            <div className="grid items-center h-full grid-cols-8">
              <img
                src="https://i.ibb.co/qY6Z6k1/Logo-club.png"
                alt="Logo-club"
                border="0"
                className="h-32 "
              ></img>
              {linkRutas.map((ruta) => (
                <div
                  key={ruta.name}
                  onMouseEnter={() => setOpenSubMenu(ruta.name)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                  className="flex items-center justify-center my-6 border-r-2 border-x-amber-300"
                >
                  <Link
                    to={ruta.path}
                    className="flex items-center text-white duration-150 ease-in-out cursor-pointer hover:text-sky-900 font-AltoneNormal"
                  >
                    <h4>{ruta.title}</h4>
                  </Link>
                  {ruta.subMenu && ruta.name === openSubMenu && (
                    <div className=" absolute w-[10rem] font-AltoneNormal text-white backdrop-blur-xl pb-4 top-[60%] px-2  ">
                      {ruta.subMenu.map((subRuta) => (
                        <div className="pt-4 border-b border-amber-300">
                          <Link
                            to={subRuta.path}
                            className=" hover:opacity-65"
                            key={subRuta.name}
                          >
                            <h4>{subRuta.title}</h4>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
