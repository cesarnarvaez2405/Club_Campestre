import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTerceroInteresado } from "../../../hooks/useTerceroInteresado";

export const SerSocioForm = () => {
  const [estaGuardando, setEstaGuardando] = useState(false);

  const { guardarTercero } = useTerceroInteresado();

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
    await guardarTercero(event);
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
              placeholder="Déjanos saber en qué estás interesado(a)."
              rows="5"
              cols="50"
            />
            {errors.notas && <AlertError>{errors.notas.message}</AlertError>}
          </div>
        </div>
      </form>
    </>
  );
};
