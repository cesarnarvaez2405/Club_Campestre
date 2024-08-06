import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNoticias } from "../Hooks/useNoticias";
import { getFormatDate } from "../../../utils/timeFormat";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";

import styles from "../Style/noticia.module.css";
import API from "../../../api/apiNode";

export const NoticiaDetalle = () => {
  const { id } = useParams();
  const { obtenerNoticia, obtenerNoticiaMongo } = useNoticias();

  const [noticia, setNoticia] = useState();

  useEffect(() => {
    encontrarNoticia();
  }, []);

  async function encontrarNoticia() {
    const noticiaDetalle = await obtenerNoticiaMongo(id);
    noticiaDetalle.fechaCreacion = getFormatDate(noticiaDetalle.createdAt);
    setNoticia(noticiaDetalle);
  }

  const formatTitleForURL = (title) => {
    return title
      .toLowerCase() // Convertir a minúsculas
      .replace(/[^a-z0-9]+/g, "-") // Reemplazar caracteres no alfanuméricos por guiones
      .replace(/^-+|-+$/g, ""); // Eliminar guiones al inicio y al final
  };

  return (
    <>
      {/* <Helmet>
        <title>{noticia?.titulo}</title>
        <meta property="og:title" content={noticia?.titulo} />
        <meta property="og:description" content={noticia?.sumario} />
        <meta property="og:image" content={noticia?.portada} />
        <meta
          property="og:url"
          content={`${API.dominio}noticia/${noticia?.rowId}/${formatTitleForURL(
            noticia?.titulo
          )}`}
        />
        <meta property="og:type" content="article" />
      </Helmet> */}

      <div className=" w-full h-full bg-neutral-700 ">
        <div className=" h-52 sm:max-md:h-40 w-full "></div>
        <div className=" flex justify-center items-center">
          <div className="flex top-0 w-2/3 sm:max-md:w-full bg-white rounded-md shadow-xl shadow-black mb-20 pb-20 ">
            <div className=" px-10 py-12 w-full">
              <div className=" flex flex-col gap-5 sm:max-md:gap-8">
                <h1 className=" font-sans font-semibold text-3xl sm:max-md:text-xl text-justify">
                  {noticia?.titulo}
                </h1>
                <h2 className=" text-gray-600 text-xl sm:max-md:text-sm text-justify pb-5">
                  {noticia && noticia.sumario}
                </h2>
              </div>
              <div className=" pt-4 flex flex-row sm:max-md:grid sm:max-md:grid-cols-3 gap-5">
                {noticia?.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-block bg-orange-500 sm:max-md:text-center py-1 px-2 text-white rounded-md"
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
                    className=" xl:h-[28rem] object-cover border  bg-slate-200"
                  />
                </div>
              </div>

              <div className=" pt-8 flex flex-col gap-5">
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
