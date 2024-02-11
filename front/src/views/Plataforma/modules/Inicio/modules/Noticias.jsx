import React, { useState } from "react";
import { RegistrarNoticia } from "../Form/registrarNoticia";

export const Noticias = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className=" w-full h-full ">
        <div className=" h-[5rem] w-full flex justify-center items-center ">
          <h2 className=" text-3xl font-AltoneBold text-white">
            Gestion de Noticias
          </h2>
        </div>
        <div className=" w-full h-[3rem]  px-7">
          <div className=" w-full h-full bg-white rounded-2xl shadow-lg ">
            <div className=" h-full grid grid-cols-2">
              <div
                className={` flex justify-center items-center border-r-2 hover:border-b-2 rounded-bl-2xl border-blue-900 ${
                  tab === 0 && "border-blue-900 rounded-bl-2xl border-b-2 "
                }`}
              >
                <button
                  onClick={() => {
                    setTab(0);
                  }}
                  className=" w-full h-full font-AltoneNormal ease-in-out duration-200 hover:text-gray-500"
                >
                  <span>Historial Noticias</span>
                </button>
              </div>
              <div
                className={` flex justify-center items-center hover:border-b-2 rounded-br-2xl border-blue-900 ${
                  tab === 1 && "border-blue-900 rounded-br-2xl border-b-2 "
                }`}
              >
                <button
                  className=" w-full h-full font-AltoneNormal ease-in-out duration-200 hover:text-gray-500 "
                  onClick={() => {
                    setTab(1);
                  }}
                >
                  <span className=" font-AltoneNormal">Crea tu noticia</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-[30rem] px-7 pt-5 ">
          <div className=" w-full h-full bg-white">
            {tab === 1 && <RegistrarNoticia></RegistrarNoticia>}
          </div>
        </div>
      </div>
    </>
  );
};
