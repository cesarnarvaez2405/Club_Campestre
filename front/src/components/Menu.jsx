import React, { useState } from "react";
import { linkRutas } from "../routes/Rutas";
import { Link } from "react-router-dom";
import logo from "../style/images/ClubCampestre.png";

const primerasRutas = linkRutas.slice(0, 3);
const ultimasRutas = linkRutas.slice(3, 7);

export const Menu = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  return (
    <>
      <div className="w-full h-36 z-50 absolute ">
        <div className="grid h-full grid-cols-9">
          <div className="flex flex-row justify-end w-full col-span-4 pl-10">
            {primerasRutas.map((ruta) => (
              <div
                key={ruta.name}
                onMouseEnter={() => setOpenSubMenu(ruta.name)}
                onMouseLeave={() => setOpenSubMenu(null)}
              >
                <Link
                  to={ruta.path}
                  className="flex items-center text-white border-l-2 my-14 border-x-amber-300 px-10 duration-150 ease-in-out cursor-pointer hover:text-sky-900 font-AltoneNormal"
                >
                  <h4>{ruta.title}</h4>
                </Link>
                {ruta.subMenu && ruta.name === openSubMenu && (
                  <div className=" absolute w-[10rem] font-AltoneNormal text-white backdrop-blur-xl pb-4 top-[60%] px-2  ">
                    {ruta.subMenu.map((subRuta) => (
                      <div className=" border-b border-amber-300 pt-4">
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

          <div className="col-start-5  flex justify-center items-center">
            <div
              className=" h-32 w-36 bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url(${logo})`,
              }}
            ></div>
          </div>

          <div className="flex flex-row justify-start w-full col-span-4 pl-10 ">
            {ultimasRutas.map((ruta) => (
              <Link
                to={ruta.path}
                className="flex items-center px-10 duration-150 text-white ease-in-out border-r-2 my-14 border-x-amber-300  cursor-pointer hover:text-sky-900 font-AltoneNormal"
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
