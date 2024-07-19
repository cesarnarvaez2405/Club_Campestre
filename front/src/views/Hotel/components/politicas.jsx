import React from "react";

export const Politicas = () => {
  return (
    <div className=" w-full flex flex-col gap-4 justify-center items-center py-10">
      <h2 className=" text-xl font-thin italic">Nuestras</h2>
      <h2 className=" font-semibold text-xl">Politicas del hotel</h2>
      <div className="border-t border-amber-300 w-[20rem] mt-3 sm:max-md:w-[15rem] "></div>
      <h2 className=" text-xl font-thin italic py-4 sm:max-md:px-5 ">
        Check- in (Hora: 15:00 pm) Check- out (Hora: 13:00 pm)
      </h2>

      <div className=" w-[50rem] py-7 text-justify font-thin sm:max-md:w-full ">
        <div className="flex flex-col gap-10 justify-center items-center">
          <p>Niños y camas adicionales</p>
          <ul className="list-disc list-inside text-justify px-10">
            <li>Los niños son bienvenidos</li>
            <li>No hay camas plegables disponibles</li>
            <li>El canje no da derecho a la firma de vales.</li>
            <li>No hay cunas</li>
            <li>No se aceptan mascotas</li>
            <li>Los huéspedes no pueden traer invitados externos al hotel.</li>
            <li>Prohibido fumar en todo el establecimiento.</li>
          </ul>
        </div>
      </div>
      <h2 className=" text-xl font-thin italic py-4">Tipos de pago</h2>
      <div className=" grid grid-cols-4 sm:max-md:grid-cols-2">
        <div className=" flex justify-center items-center flex-col font-thin italic py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#3F51B5"
              d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
            ></path>
            <path
              fill="#FFC107"
              d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"
            ></path>
            <path
              fill="#FF3D00"
              d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"
            ></path>
          </svg>
          <p>Mastercard</p>
        </div>
        <div className=" flex justify-center items-center flex-col font-thin italic py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1565C0"
              d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
            ></path>
            <path
              fill="#FFF"
              d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
            ></path>
            <path
              fill="#FFC107"
              d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
            ></path>
          </svg>
          <p>Visa</p>
        </div>
        <div className=" flex justify-center items-center flex-col font-thin italic py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#CFD8DC"
              d="M45,35c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4V35z"
            ></path>
            <path
              fill="#1565C0"
              d="M29,16H19c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h10c4.4,0,8-3.6,8-8C37,19.6,33.4,16,29,16z"
            ></path>
            <path
              fill="#FFF"
              d="M19,18c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S22.3,18,19,18z M15,24c0-1.9,1.3-3.4,3-3.9v7.7C16.3,27.4,15,25.9,15,24z M20,27.9v-7.7c1.7,0.4,3,2,3,3.9C23,25.9,21.7,27.4,20,27.9z"
            ></path>
          </svg>
          <p>Diners club International </p>
        </div>
        <div className=" flex justify-center items-center flex-col font-thin italic py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-cash"
            width="70"
            height="70"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
            <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
          </svg>
          <p>Efectivo</p>
        </div>
      </div>
    </div>
  );
};
