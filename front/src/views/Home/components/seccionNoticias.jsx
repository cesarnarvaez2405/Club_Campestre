import React from "react";
import API from "../../../api/apiNode";

export const SeccionNoticias = ({ noticias }) => {
  return (
    <>
      <div className="flex flex-col py-8 px-20 items-center w-full 2xl:h-[30rem] h-[25rem] bg-gray-300 ">
        <span className="text-2xl  font-AltoneNormal">Noticias</span>
        <div className="grid w-full h-full grid-cols-3 gap-5 pt-4 ">
          {noticias.map((noticia, index) => (
            <div
              className="relative z-10 w-full h-full bg-center bg-no-repeat bg-cover border  bg-slate-200"
              key={index}
              style={{
                backgroundImage: `url(${noticia.portada})`,
              }}
            >
              <div className="w-full h-full duration-150 ease-in-out cursor-pointer  hover:backdrop-blur-sm"></div>
              <div className=" bg-black bg-opacity-55 absolute bottom-0 left-0 px-2 py-1 w-full min-h-[4rem] ">
                <span className="font-semibold text-white ">
                  {noticia.titulo}
                </span>
              </div>
              <div className="absolute top-0 right-0 px-2 py-1  bg-amber-300">
                <span className="font-semibold ">{noticia.fechaCreacion}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
