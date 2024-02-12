import React from "react";
import API from "../../../api/apiNode";

export const SeccionNoticias = ({ noticias }) => {
  return (
    <>
      <div className="flex flex-col py-8 px-20 items-center w-full 2xl:h-[30rem] h-[25rem] bg-gray-300 ">
        <span className=" font-AltoneNormal text-2xl">Noticias</span>
        <div className=" grid grid-cols-3 gap-5 w-full h-full pt-4">
          {noticias.map((noticia, index) => (
            <div
              className=" border w-full h-full relative bg-slate-200 bg-center bg-no-repeat bg-cover z-10 "
              key={index}
              style={{
                backgroundImage: `url(${API.node}campestre-api/v1/file/${noticia.portada})`,
              }}
            >
              <div className=" w-full h-full hover:backdrop-blur-sm ease-in-out duration-150 cursor-pointer"></div>
              <div className=" bg-black bg-opacity-55 absolute bottom-0 left-0 px-2 py-1 w-full min-h-[4rem] ">
                <span className=" text-white font-semibold">
                  {noticia.titulo}
                </span>
              </div>
              <div className=" bg-amber-300  absolute top-0 right-0 px-2 py-1 ">
                <span className=" font-semibold">{noticia.fechaCreacion}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
