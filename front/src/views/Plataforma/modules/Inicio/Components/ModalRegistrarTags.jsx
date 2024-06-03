import React from "react";
import { useForm } from "react-hook-form";

import { useRegistrarNoticia } from "../hooks/useRegistrarNoticia";
import { Dot } from "../../../../../components/Util/Dot";
import { AlertError } from "../../../../../components/Util/alertError";

export const ModalRegistrarTags = ({ cerrarModal }) => {
  const { crearTags } = useRegistrarNoticia();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const registrarTags = async (event) => {
    await crearTags({
      nombre: event.nombre,
      prefijoTag: event.prefijo,
    });
    reset();
    cambiarModal();
  };

  const cambiarModal = () => {
    cerrarModal();
  };

  return (
    <>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 items-center justify-center w-full max-h-full overflow-x-hidden overflow-y-auto bg-gray-700 shadow md:inset-0 bg-opacity-60 sm:max-md:pt-12 sm:max-md:pb-20 "
      >
        <div className="relative w-full max-w-2xl max-h-full p-4 2xl:left-1/3 2xl:top-[30%] sm:max-md:left-[0%] lg:top-0 lg:left-[28%] ">
          <form onSubmit={handleSubmit(registrarTags)}>
            <div className="relative bg-blue-950 rounded-lg shadow dark:bg-blue-950">
              <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Crea un nuevo Tag
                </h2>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                  onClick={cambiarModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-8 space-y-4 md:p-8">
                <p className="text-base leading-relaxed text-black dark:text-white">
                  Crea un nuevo Tag para poder asignarlo a la noticia
                </p>
                <div className="grid grid-cols-2 gap-2 ">
                  <div className="flex flex-col flex-wrap ">
                    <small className="flex text-black dark:text-white ">
                      Prefijo <Dot />
                    </small>
                    <input
                      className={`p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                        errors.prefijo &&
                        "border-red-500 outline-none border-2 ring-red-500"
                      }`}
                      type="text"
                      name="prefijo"
                      id="prefijo"
                      placeholder="prefijo"
                      {...register("prefijo", {
                        required: "El prefijo es obligatorio",
                      })}
                    />
                    {errors.prefijo && (
                      <AlertError> {errors.prefijo.message} </AlertError>
                    )}
                  </div>
                  <div className="flex flex-col flex-wrap ">
                    <small className="flex text-black dark:text-white ">
                      Nombre <Dot />
                    </small>
                    <input
                      className={`p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                        errors.nombre &&
                        "border-red-500 outline-none border-2 ring-red-500"
                      }`}
                      type="text"
                      name="nombre"
                      id="nombre"
                      placeholder="nombre"
                      {...register("nombre", {
                        required: "El nombre es obligatorio",
                      })}
                    />
                    {errors.nombre && (
                      <AlertError> {errors.nombre.message} </AlertError>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center p-4 border-t border-gray-200 rounded-b md:p-5 dark:border-gray-600">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">
                  <div className="flex flex-row gap-3 ">
                    <p>Registrar</p>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
