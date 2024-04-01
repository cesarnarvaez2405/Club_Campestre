import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { useUsuarios } from "../hooks/useUsuarios";
import { TableUsuarios } from "../Components/TableUsuarios";
import { AlertError } from "../../../../../components/Util/alertError";
import { SpinnerLoading } from "../../../../../components/SpinnerLoading";
import Swal from "sweetalert2";
import { Dot } from "../../../../../components/Util/Dot";

export const Usuarios = () => {
  const { obtenerUsuarios, registrarUsuario, eliminarUsuario } = useUsuarios();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const [usuarios, setUsuarios] = useState([]);
  const [abrirModal, setAbrirModal] = useState(false);
  const [passwordsEquals, setPasswordsEquals] = useState(false);
  const [estaGuardando, setEstaGuardando] = useState(false);
  const [usuarioIdEditar, setUsuarioIdEditar] = useState();
  const [quiereEditar, setQuiereEditar] = useState(false);

  const fetchUsuarios = async () => {
    const users = await obtenerUsuarios();
    setUsuarios(users);
  };

  const cerrarModal = () => {
    setAbrirModal(false);
    setQuiereEditar(false);
    fetchUsuarios();
    reset();
  };

  const confirmarUsuario = async (event) => {
    setEstaGuardando(true);
    const { password, secondPassword } = event;

    if (password !== secondPassword) {
      setPasswordsEquals(true);
      setEstaGuardando(false);
      return;
    }
    await registrarUsuario(event);
    limpiar();
  };

  const handleEdit = (usuario) => {
    const { rowId, nombre, email } = usuario;
    setQuiereEditar(true);
    setUsuarioIdEditar(rowId);
    setValue("nombre", nombre);
    setValue("email", email);
    setAbrirModal(true);
  };

  const onEdit = (event) => {
    console.log(event);
  };

  const handleDelete = async (usuario) => {
    Swal.fire({
      title: `¡Advertencia!`,
      text: `¿Estas seguro de eliminar a ${usuario.nombre}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#06B357",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminarUsuario(usuario.rowId);
        await fetchUsuarios();
      }
    });
  };

  const limpiar = () => {
    setEstaGuardando(false);
    setPasswordsEquals(false);
    setQuiereEditar(false);
    setUsuarioIdEditar();
    cerrarModal();
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <>
      <div className=" w-full h-full ">
        <div className=" h-[5rem] w-full flex justify-center items-center ">
          <h2 className=" text-3xl font-AltoneBold text-white">
            Gestion de Usuarios
          </h2>
        </div>

        <div className=" w-full  px-7 mb-10 ">
          <div className=" w-full h-full bg-white py-5 2xl:px-56">
            <div className=" flex justify-between items-center">
              <h3 className=" font-AltoneNormal text-xl">
                Listados de usuarios
              </h3>
              <button
                onClick={() => {
                  setAbrirModal(true);
                }}
                className="inline-block py-1 px-6 rounded-xl bg-[#1a195f] hover:bg-white hover:text-[#1a195f] focus:text-[#1a195f] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200"
              >
                Registrar
              </button>
            </div>
            <div>
              <TableUsuarios
                items={usuarios}
                itemsPerPage={12}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </div>

            {abrirModal && (
              <div
                tabIndex="-1"
                aria-hidden="true"
                className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full bg-white shadow dark:bg-gray-700 dark:bg-opacity-60"
              >
                <div className="relative p-4 w-full max-w-2xl max-h-full left-1/3 top-1/4 ">
                  <form
                    onSubmit={handleSubmit(
                      quiereEditar ? onEdit : confirmarUsuario
                    )}
                  >
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {!quiereEditar && <p>Registrar usuario</p>}
                          {quiereEditar && <p>Editar usuario</p>}
                        </h3>
                        <button
                          type="button"
                          onClick={cerrarModal}
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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

                      <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-black dark:text-white">
                          Completa todos los campos para poder
                          {!quiereEditar && <span> registrar</span>}
                          {quiereEditar && <span> editar</span>} a tu usuario
                          correctamente
                        </p>

                        {!quiereEditar && (
                          <p className=" text-sm text-white">
                            <strong>Nota: </strong>Los usuario que registraras
                            solamente podra crear noticias pero no puede crar
                            otros usuario
                          </p>
                        )}

                        <div className=" grid grid-cols-2 gap-2">
                          <div className=" flex flex-col flex-wrap">
                            <small className=" text-white flex">
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
                          <div className=" flex flex-col">
                            <small className=" text-white flex">
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

                          {!quiereEditar && (
                            <div className=" flex flex-col">
                              <small className=" text-white flex">
                                Password
                                <Dot />
                              </small>
                              <input
                                className={`p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                                  errors.password &&
                                  "border-red-500 outline-none border-2 ring-red-500"
                                }`}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                {...register("password", {
                                  required: "El password es obligatorio",
                                })}
                              />
                              {errors.password && (
                                <AlertError>
                                  {errors.password.message}
                                </AlertError>
                              )}
                            </div>
                          )}

                          {!quiereEditar && (
                            <div className=" flex flex-col">
                              <small className=" text-white flex">
                                Confirmacion password
                                <Dot />
                              </small>
                              <input
                                className={`p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                                  errors.secondPassword &&
                                  "border-red-500 outline-none border-2 ring-red-500"
                                }`}
                                type="password"
                                name="secondPassword"
                                id="secondPassword"
                                placeholder="secondPassword"
                                {...register("secondPassword", {
                                  required: "El password es obligatorio",
                                })}
                              />
                              {errors.secondPassword && (
                                <AlertError>
                                  {errors.secondPassword.message}
                                </AlertError>
                              )}
                            </div>
                          )}
                        </div>

                        {passwordsEquals && (
                          <div className=" bg-red-600 bg-opacity-65 px-3 py-1 rounded-lg">
                            <small className=" text-white">
                              la <strong>contraseña de confirmación </strong>
                              debe ser idéntica a la primera contraseña que
                              ingreses. Sin coincidencia, no podrás registrar al
                              usuario.
                            </small>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-row items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">
                          <div className=" flex flex-row gap-3">
                            {!estaGuardando && !quiereEditar && (
                              <p>Registrar</p>
                            )}

                            {!estaGuardando && quiereEditar && <p>Editar</p>}

                            {estaGuardando && <SpinnerLoading />}
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
