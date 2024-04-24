import React from "react";
import { useForm } from "react-hook-form";
import { AlertError } from "../../../../components/Util/alertError";
import { Autenticador } from "./hooks/autenticador";

export const Login = () => {
  const { ingresarLogin } = Autenticador();

  const backgroundImage = {
    background: "linear-gradient(45deg, #feb71e 25%, #b31515 62%)",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event) => {
    const { email, password } = event;
    await ingresarLogin(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-gradient-to-r from-red-700 to-amber-300 w-[100%] 2xl:h-screen py-[9rem] flex justify-center items-center animate-color-change-2x '>
          <div className='flex items-center justify-center'>
            <div className='bg-gray-900 border-[4px]  border-gray-900 shadow-2xl shadow-black rounded-2xl  transition-all duration-200'>
              <div className='mx-auto flex items-center space-y-4 py-24 px-16 font-semibold text-gray-500 flex-col'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-12 h-12 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z'
                  />
                </svg>

                <h1 className='text-white text-2xl'>Inicia Sección</h1>

                <input
                  className={`w-full p-2 bg-blue-900 text-white rounded-md border border-gray-700 focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                    errors.email &&
                    "border-red-500 outline-none border-2 ring-red-500"
                  }`}
                  placeholder='Email'
                  type='email'
                  name='email'
                  id=''
                  {...register("email", {
                    required: "El email es obligatorio",
                  })}
                />
                {errors.email && (
                  <AlertError> {errors.email.message} </AlertError>
                )}
                <input
                  className={`w-full p-2 bg-blue-900 text-white rounded-md border border-gray-700 focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                    errors.password &&
                    "border-red-500 outline-none border-2 ring-red-500"
                  }`}
                  placeholder='Password'
                  type='password'
                  name='password'
                  id=''
                  {...register("password", {
                    required: "El password es obligatorio",
                  })}
                />
                {errors.password && (
                  <AlertError> {errors.password.message} </AlertError>
                )}
                <button
                  className='w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200'
                  type='submit'
                  id=''
                >
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
