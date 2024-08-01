import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNoticias } from "../Hooks/useNoticias";
import { getFormatDate } from "../../../utils/timeFormat";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";

import styles from "../Style/noticia.module.css";

export const NoticiaDetalle = () => {
  const { id } = useParams();
  const { obtenerNoticia } = useNoticias();

  const [noticia, setNoticia] = useState();

  useEffect(() => {
    encontrarNoticia();
  }, []);

  async function encontrarNoticia() {
    const noticiaDetalle = await obtenerNoticia(id);
    noticiaDetalle.fechaCreacion = getFormatDate(noticiaDetalle.fechaCreacion);
    setNoticia(noticiaDetalle);
  }

  return (
    <>
      <div className=" w-full h-full bg-neutral-700">
        <div className=" h-52 sm:max-md:h-40 w-full "></div>
        <div className=" flex justify-center items-center">
          <div className="flex top-0 w-2/3 sm:max-md:w-full bg-white rounded-md shadow-xl shadow-black mb-20 pb-20 ">
            <div className=" px-10 py-12 w-full">
              <div>
                <h2 className=" font-sans font-semibold text-3xl sm:max-md:text-xl">
                  {noticia?.titulo}
                </h2>
              </div>
              <div className=" pt-4 flex flex-row gap-5">
                {noticia?.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-block bg-orange-500 py-1 px-2 text-white rounded-md"
                  >
                    <p>{tag.nombre}</p>
                  </div>
                ))}

                <div className=" flex justify-center items-center font-thin gap-2">
                  <ClockIcon className=" w-5 h-5" />
                  <p>{noticia && noticia.fechaCreacion}</p>
                </div>

                <div className=" flex justify-center items-center font-thin gap-2">
                  <UserCircleIcon className=" w-5 h-5" />
                  <p>{noticia && noticia.usuarioCreacion.nombre}</p>
                </div>
              </div>
              <div className=" pt-10 w-full flex justify-center items-center">
                <div>
                  <img
                    src={`${noticia?.portada}`}
                    alt="Noticias"
                    className=" h-[28rem] object-cover border  bg-slate-200"
                  />
                </div>
              </div>
              <div className=" pt-14">
                <div
                  className={styles.noticia}
                  dangerouslySetInnerHTML={{
                    __html: noticia && noticia.cuerpo,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
