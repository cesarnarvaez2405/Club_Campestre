import React, { useEffect, useState } from "react";
import { RegistrarNoticia } from "../Form/registrarNoticia";
import { HistorialNoticias } from "../Partials/historialNoticias";
import { useHistorialNoticias } from "../hooks/useHistorialNoticias";
import { getFormatDate } from "../../../../../utils/timeFormat";
import { useRegistrarNoticia } from "../hooks/useRegistrarNoticia";

export const Noticias = () => {
  const { obtenerNoticias } = useHistorialNoticias();
  const { obtenerTags } = useRegistrarNoticia();

  const [tab, setTab] = useState(0);
  const [noticias, Setnoticias] = useState([]);
  const [noticiaAEditar, setNoticiaAEditar] = useState(null);
  const [estaEditando, setEstaEditando] = useState(false);
  const [contenido, setContenido] = useState("");
  const [tags, setTags] = useState([]);
  const [portadaEditar, setPortadaEditar] = useState();

  async function encontrarNoticias() {
    const noticias = await obtenerNoticias();
    noticias.map((noticia) => {
      noticia.fechaCreacion = getFormatDate(noticia.fechaCreacion);
      noticia.fechaModificacion = getFormatDate(noticia.fechaModificacion);
    });
    Setnoticias(noticias);
  }

  async function encontrarTags() {
    const tagsEncontrados = await obtenerTags();
    setTags(tagsEncontrados);
  }

  const getFileUrl = async (url, nombre) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], nombre, {
      type: response.headers.get("content-type"),
    });
  };

  const editar = async (item) => {
    setNoticiaAEditar(item);
    setEstaEditando(true);
    setContenido(item.cuerpo);
    const portada = item.portada;
    setPortadaEditar(portada);
    setTab(1);
  };

  useEffect(() => {
    encontrarNoticias();
    encontrarTags();
  }, []);
  return (
    <>
      <div className="w-full h-full ">
        <div className=" h-[5rem] w-full flex justify-center items-center ">
          <h2 className="text-3xl text-white font-AltoneBold">
            Gestion de Noticias
          </h2>
        </div>
        <div className=" w-full h-[3rem]  px-7">
          <div className="w-full h-full bg-white shadow-lg rounded-2xl">
            <div className="grid h-full grid-cols-2 ">
              <div
                className={` flex justify-center items-center border-r-2 hover:border-b-2 rounded-bl-2xl border-blue-900 ${
                  tab === 0 && "border-blue-900 rounded-bl-2xl border-b-2 "
                }`}
              >
                <button
                  onClick={() => {
                    setTab(0);
                    setEstaEditando(false);
                  }}
                  className="w-full h-full duration-200 ease-in-out font-AltoneNormal hover:text-gray-500"
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
                  className="w-full h-full duration-200 ease-in-out font-AltoneNormal hover:text-gray-500"
                  onClick={() => {
                    setTab(1);
                    setEstaEditando(false);
                  }}
                >
                  <span className=" font-AltoneNormal">Crea tu noticia</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-5 mb-10 px-7">
          <div className="w-full h-full bg-white ">
            {tab === 0 && (
              <HistorialNoticias
                obtenerNoticias={encontrarNoticias}
                noticias={noticias}
                editar={editar}
                noticia={null}
                estaEditando={true}
              />
            )}
            {tab === 1 && (
              <RegistrarNoticia
                obtenerNoticias={encontrarNoticias}
                estaEditando={estaEditando}
                noticiaAEditar={noticiaAEditar}
                contenido={contenido}
                setContenido={setContenido}
                tags={tags}
                setTab={setTab}
                portadaEditar={portadaEditar}
              ></RegistrarNoticia>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
