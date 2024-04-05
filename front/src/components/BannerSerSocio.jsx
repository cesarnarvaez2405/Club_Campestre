import React, { useState } from "react";
import documentoEstatuto from "../style/images/estatuto.pdf";
import { useForm } from "react-hook-form";
import { Dot } from "./Util/Dot";
import { SpinnerLoading } from "./SpinnerLoading";
import { AlertError } from "./Util/alertError";
import { useTerceroInteresado } from "../hooks/useTerceroInteresado";

export const BannerSerSocio = () => {
  const { guardarTercero } = useTerceroInteresado();

  const [abrirModal, setAbrirModal] = useState(false);
  const [estaGuardando, setEstaGuardando] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const cerrarModal = () => {
    setAbrirModal(false);
    reset();
  };

  const onGuardar = async (event) => {
    setEstaGuardando(true);
    await guardarTercero(event);
    setEstaGuardando(false);
    setAbrirModal(false);
    reset();
  };

  return (
    <>
      <div className="flex justify-center items-center h-full flex-col gap-7 ">
        <div className=" text-2xl flex justify-center items-center flex-col font-AltoneNormal">
          <span> ¿Cómo Ser Socio?</span>
        </div>
        <div className=" font-AltoneNormal">
          <p className=" text-center">
            Únete a nuestra familia de socios y disfruta de una experiencia
            memorable en cada uno de los entornos que tenemos disponibles para
            ti. <br />
            Contamos con diferentes modalidades de ingreso y múltiples
            beneficios que harán del Club Campestre de Neiva, tu nuevo hogar.
            <br />
            <br />
            <span className=" text-xl text-amber-400 font-semibold">
              #ViveClubCampestre
            </span>
          </p>
        </div>
        <button
          onClick={() => setAbrirModal(true)}
          className=" hover:border-amber-300 px-6 py-2 rounded-md text-amber-300  font-AltoneNormal hover:scale-110 transition-all ease-in-out duration-150 bg-slate-900 hover:shadow-lg hover:shadow-amber-300 shadow-slate-600 shadow-md"
        >
          Quiero ser socio
        </button>
      </div>

      {abrirModal && (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 items-center justify-center w-full max-h-full overflow-x-hidden overflow-y-auto bg-gray-700 shadow md:inset-0 bg-opacity-60"
        >
          <div className="relative w-full max-w-2xl max-h-full p-4 left-1/3 top-[20%] ">
            <form onSubmit={handleSubmit(onGuardar)}>
              <div className="relative bg-blue-950 rounded-lg shadow dark:bg-blue-950">
                <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    ¿Tienes alguna duda por resolver?
                  </h2>
                  <button
                    type="button"
                    onClick={cerrarModal}
                    className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
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
                    Dejanos tus datos y podrás tener una asesoria detallada
                  </p>
                  <div className="grid grid-cols-1 gap-2 ">
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
                    <div className="flex flex-col ">
                      <small className="flex text-black dark:text-white ">
                        Email
                        <Dot />
                      </small>
                      <input
                        className={`p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                          errors.email &&
                          "border-red-500 outline-none border-2 ring-red-500"
                        }`}
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        {...register("email", {
                          required: "El email es obligatorio",
                        })}
                      />
                      {errors.email && (
                        <AlertError> {errors.email.message} </AlertError>
                      )}
                    </div>

                    <div className="flex flex-col ">
                      <small className="flex text-black dark:text-white ">
                        Telefono
                        <Dot />
                      </small>
                      <input
                        className={`p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                          errors.telefono &&
                          "border-red-500 outline-none border-2 ring-red-500"
                        }`}
                        type="number"
                        name="telefono"
                        id="telefono"
                        placeholder="telefono"
                        {...register("telefono", {
                          required: "El telefono es obligatorio",
                        })}
                      />
                      {errors.telefono && (
                        <AlertError>{errors.telefono.message}</AlertError>
                      )}
                    </div>

                    <div className="flex flex-col ">
                      <small className="flex text-black dark:text-white ">
                        Nota
                        <Dot />
                      </small>
                      <textarea
                        {...register("notas", {
                          required: "La notas es obligatoria",
                        })}
                        className={`p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                          errors.notas &&
                          "border-red-500 outline-none border-2 ring-red-500"
                        }`}
                        name="notas"
                        id="notas"
                        placeholder="Dejanos saber en que estas interesado(a)"
                        rows="5"
                        cols="50"
                      />
                      {errors.notas && (
                        <AlertError>{errors.notas.message}</AlertError>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4 border-t border-gray-200 rounded-b md:p-5 dark:border-gray-600">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">
                    <div className="flex flex-row gap-3 ">
                      {!estaGuardando && <p>Registrar</p>}
                      {estaGuardando && <SpinnerLoading />}
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
