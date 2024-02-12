import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AlertError } from "../../../../../components/Util/alertError";
import { useRegistrarNoticia } from "../hooks/useRegistrarNoticia";
import Swal from "sweetalert2";

export const RegistrarNoticia = ({ obtenerNoticias }) => {
  const [tags, setTags] = useState([]);
  const [contenido, setContenido] = useState("");
  const { obtenerTags, guardar } = useRegistrarNoticia();

  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    async function encontrarTags() {
      const tagsEncontrados = await obtenerTags();
      setTags(tagsEncontrados);
    }
    encontrarTags();
  }, []);

  const handleChange = (texto) => {
    setContenido(texto);
  };

  const guardarNoticia = async (event) => {
    const respuesta = await guardar(event);

    if (respuesta) {
      Swal.fire({
        title: "El tamaño del archivo excede el límite de 3MB",
        text: "La imagen tiene que ser menos a 3mb",
        icon: "error",
      });
      reset();
    }
    reset();
    await obtenerNoticias();
  };

  return (
    <>
      <form onSubmit={handleSubmit(guardarNoticia)}>
        <div className=" h-full flex flex-col gap-10 justify-start items-start 2xl:px-56 px-20 py-5 bg-white ">
          <h2 className=" text-2xl font-semibold pt-3">Crea tu Noticia</h2>
          <div className="flex flex-row gap-5">
            <div className=" flex justify-center items-center">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                1
              </span>
            </div>

            <div className=" flex flex-col justify-center items-start">
              <h3 className=" font-AltoneNormal text-xl">
                TÍtulo
                <span className=" font-AltoneNormal text-sm pl-3">
                  "Escriba tu titulo mas creativo"
                </span>
              </h3>
              <input
                className={` 2xl:w-[50rem] lg:w-[40rem] md:w-[25rem] w-[20rem] p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                  errors.titulo &&
                  "border-red-500 outline-none border-2 ring-red-500"
                }`}
                type="text"
                name="titulo"
                id="titulo"
                placeholder="titulo"
                {...register("titulo", {
                  required: "El titulo es obligatorio",
                })}
              />
              {errors.titulo && (
                <AlertError> {errors.titulo.message} </AlertError>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className=" flex justify-center items-center">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                2
              </span>
            </div>

            <div className=" flex flex-col justify-center items-start">
              <h3 className=" font-AltoneNormal text-xl">
                Portada
                <span className=" font-AltoneNormal text-sm pl-3">
                  "Selecciona la mejor imagen como portada"
                </span>
              </h3>
              <div className="">
                <input
                  type="file"
                  name="portada"
                  id="file-input"
                  accept=".png"
                  maxLength="3145728"
                  {...register("portada", {
                    required: "La imagen es obligatoria",
                  })}
                  className="block w-[100%] border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0 file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                />
                {errors.portada && (
                  <AlertError> {errors.portada.message} </AlertError>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className=" flex justify-center items-center">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                3
              </span>
            </div>

            <div className=" flex flex-col justify-center items-start">
              <h3 className=" font-AltoneNormal text-xl">
                Tags
                <span className=" font-AltoneNormal text-sm pl-3">
                  "Escoja los tags adecuados a la noticia"
                </span>
              </h3>
              <div className="">
                <Controller
                  name="tags"
                  control={control}
                  rules={{ required: "Los tags son obligatorios" }}
                  render={({ field }) => (
                    <Select
                      components={animatedComponents}
                      closeMenuOnSelect={false}
                      isMulti
                      options={tags.map((tag) => ({
                        value: tag.rowId,
                        label: tag.nombre,
                      }))}
                      className=" w-full"
                      {...field}
                    />
                  )}
                />
                {errors.tags && (
                  <AlertError> {errors.tags.message} </AlertError>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className=" flex justify-center items-center">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                4
              </span>
            </div>

            <div className=" flex flex-col justify-center items-start">
              <h3 className=" font-AltoneNormal text-xl">
                Cuerpo
                <span className=" font-AltoneNormal text-sm pl-3">
                  "Diseña la Noticia a tu gusto"
                </span>
              </h3>
              <div className=" 2xl:w-[50rem] lg:w-[40rem] md:w-[25rem] w-[20rem] ">
                <Controller
                  name="cuerpo"
                  control={control}
                  rules={{ required: "El contenido son obligatorios" }}
                  render={({ field }) => (
                    <ReactQuill
                      value={contenido}
                      onChange={handleChange}
                      theme="snow"
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          ["bold", "italic", "underline", "strike"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["link", "image"],
                          ["clean"],
                        ],
                      }}
                      {...field}
                    />
                  )}
                />
                {errors.cuerpo && (
                  <AlertError> {errors.cuerpo.message} </AlertError>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className=" flex justify-center items-center">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                5
              </span>
            </div>

            <div className=" flex flex-col justify-center items-start">
              <button className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#1a195f] hover:bg-white hover:text-[#1a195f] focus:text-[#1a195f] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
