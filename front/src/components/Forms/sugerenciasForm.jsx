import React, { useState } from "react";
import { useTerceroInteresado } from "../../hooks/useTerceroInteresado";
import { useForm } from "react-hook-form";
import { SpinnerLoading } from "../SpinnerLoading";
import { Dot } from "../Util/Dot";
import { useSugerencias } from "../../hooks/useSugerencias";
import { AlertError } from "../Util/alertError";

export const SugerenciasForm = () => {
  const [estaGuardando, setEstaGuardando] = useState(false);

  const { guardarSugerencia } = useSugerencias();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onGuardar = async (event) => {
    setEstaGuardando(true);
    await guardarSugerencia(event);
    setEstaGuardando(false);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onGuardar)}>
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
              placeholder="Nombre Completo"
              {...register("nombre", {
                required: "El Nombre es obligatorio",
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
            {errors.email && <AlertError> {errors.email.message} </AlertError>}
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
              placeholder="Déjanos saber tu sugerencia"
              rows="5"
              cols="50"
            />
            {errors.notas && <AlertError>{errors.notas.message}</AlertError>}
          </div>
        </div>
        <div className="flex flex-row items-center  border-t border-gray-200 rounded-b md:pt-4 dark:border-gray-600 mt-5">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">
            <div className="flex flex-row gap-3 ">
              {!estaGuardando && <p>Enviar</p>}
              {estaGuardando && <SpinnerLoading />}
            </div>
          </button>
        </div>
      </form>
    </>
  );
};
