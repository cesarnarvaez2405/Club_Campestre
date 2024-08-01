import React from "react";
import API from "../../../api/apiNode";
import { Link } from "react-router-dom";

export const SeccionNoticias = ({ noticias }) => {
  return (
    <>
      <div className="flex flex-col py-8 px-20 items-center w-full  bg-gray-300  sm:max-md:px-8  ">
        <span className="text-2xl  font-AltoneNormal">Noticias</span>
        <div className="grid w-full h-full grid-cols-3 gap-5 pt-4 sm:max-lg:grid-cols-1 ">
          {noticias.map((noticia, index) => (
            <Link to={`/noticia/${noticia.rowId}`}>
              <div className="relative h-96  bg-slate-200 border">
                <img
                  src={`${noticia.portada}`}
                  alt="Noticias"
                  className="w-full h-full object-cover"
                  key={index}
                />
                <div className="absolute top-0 right-0 px-2 py-1 bg-amber-300">
                  <span className="font-semibold text-black">
                    {noticia.fechaCreacion}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-2 py-1 bg-black bg-opacity-55">
                  <span className="font-semibold text-white">
                    {noticia.titulo}
                  </span>
                  <div className="my-3 text-sm text-white">
                    <p>{noticia.sumario}</p>
                  </div>
                </div>
                <div className="absolute inset-0 duration-150 ease-in-out cursor-pointer hover:backdrop-blur-sm"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
