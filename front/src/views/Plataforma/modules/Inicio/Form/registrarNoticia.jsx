import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { AlertError } from "../../../../../components/Util/alertError";
import { useRegistrarNoticia } from "../hooks/useRegistrarNoticia";

export const RegistrarNoticia = () => {
  const [tags, setTags] = useState([]);
  const { obtenerTags } = useRegistrarNoticia();

  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function encontrarTags() {
      const tagsEncontrados = await obtenerTags();
      setTags(tagsEncontrados);
    }
    encontrarTags();
  }, []);

  return (
    <>
      <form>
        <div className=" h-full flex flex-col gap-10 justify-start items-start 2xl:px-56 px-20 py-5 bg-white ">
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
                className={` w-[50rem] p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
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
        </div>
      </form>
    </>
  );
};
