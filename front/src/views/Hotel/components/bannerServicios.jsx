import React from "react";
import { WifiIcon } from "@heroicons/react/16/solid";

export const BannerServicios = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-4 justify-center items-center py-10 bg-zinc-800">
        <h2 className=" text-xl font-thin italic text-white">Comodidades</h2>
        <div className=" h-full w-[60%] pt-8 grid grid-cols-7 ">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-6 h-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bath-filled rounded-sm "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="#fcd34d" />
                <path
                  d="M11 2a1 1 0 0 1 .993 .883l.007 .117v2.25a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.25h-2a1 1 0 0 0 -.993 .883l-.007 .117v6h13a2 2 0 0 1 1.995 1.85l.005 .15v3c0 1.475 -.638 2.8 -1.654 3.715l.486 .73a1 1 0 0 1 -1.594 1.203l-.07 -.093l-.55 -.823a4.98 4.98 0 0 1 -1.337 .26l-.281 .008h-10a4.994 4.994 0 0 1 -1.619 -.268l-.549 .823a1 1 0 0 1 -1.723 -1.009l.059 -.1l.486 -.73a4.987 4.987 0 0 1 -1.647 -3.457l-.007 -.259v-3a2 2 0 0 1 1.85 -1.995l.15 -.005h1v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h3z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Baño privado
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-air-conditioning"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 16a3 3 0 0 1 -3 3" />
                  <path d="M16 16a3 3 0 0 0 3 3" />
                  <path d="M12 16v4" />
                  <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Aire acondicionado
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-device-tv"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M16 3l-4 4l-4 -4" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">Televisor</small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-wash-temperature-5"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 15h.01" />
                  <path d="M3 6l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612a2 2 0 0 0 1.973 -1.671l1.721 -10.329" />
                  <path d="M14 15h.01" />
                  <path d="M15 12h.01" />
                  <path d="M12 12h.01" />
                  <path d="M9 12h.01" />
                  <path d="M3.486 8.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.17 0 .339 -.014 .503 -.034" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Limpieza diaria
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-toilet-paper"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 10m-3 0a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" />
                  <path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
                  <path d="M6 3h12" />
                  <path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />
                  <path d="M6 10h.01" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Productos de limpieza
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-fridge"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                  <path d="M5 10h14" />
                  <path d="M9 13v3" />
                  <path d="M9 6v1" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">Mini bar</small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-device-landline-phone"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z" />
                  <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" />
                  <path d="M12 8h-6v3h6z" />
                  <path d="M12 14v.01" />
                  <path d="M9 14v.01" />
                  <path d="M6 14v.01" />
                  <path d="M12 17v.01" />
                  <path d="M9 17v.01" />
                  <path d="M6 17v.01" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Telefono en la habitacion
              </small>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-300 w-[80rem] mt-3 "></div>
      </div>

      <div className=" w-full flex flex-col gap-4 justify-center items-center py-10 bg-zinc-800">
        <h2 className=" text-xl font-thin italic text-white">
          Servicios locativos
        </h2>
        <div className=" h-full w-[60%] pt-8 grid grid-cols-7 ">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-golf"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 18v-15l7 4l-7 4" />
                  <path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Campo de Golf (Cargo)
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-ball-volleyball"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 12a8 8 0 0 0 8 4" />
                  <path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
                  <path d="M12 12a8 8 0 0 0 -7.464 4.928" />
                  <path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
                  <path d="M12 12a8 8 0 0 0 -.536 -8.928" />
                  <path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Cancha de voley playa
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-ball-football"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
                  <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Canchas de futbol
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-ball-tennis"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M6 5.3a9 9 0 0 1 0 13.4" />
                  <path d="M18 5.3a9 9 0 0 0 0 13.4" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Cancha de tenis
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-barbell"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12h1" />
                  <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
                  <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                  <path d="M9 12h6" />
                  <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                  <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
                  <path d="M22 12h-1" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">Gimnasio</small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-soup"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
                  <path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                  <path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                  <path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Restaurante Bar
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-amber-300">
              <div className="w-6 h-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-pool"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
                  <path d="M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
                  <path d="M15 12v-7.5a1.5 1.5 0 0 1 3 0" />
                  <path d="M9 12v-7.5a1.5 1.5 0 0 0 -3 0" />
                  <path d="M15 5l-6 0" />
                  <path d="M9 10l6 0" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Zonas Humedas
              </small>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-300 w-[80rem] mt-3 "></div>
      </div>

      <div className=" w-full flex flex-col gap-4 justify-center items-center py-10 bg-zinc-800">
        <h2 className=" text-xl font-thin italic text-white">
          Otros Servicios
        </h2>
        <div className=" h-full w-[40%] pt-8 grid grid-cols-5 ">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-5 h-5 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#fcd34d"
                  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"
                />
              </svg>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Parqueadero
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-5 h-5 rounded-sm bg-amber-300">
              <div className="w-4 h-4 ">
                <WifiIcon />
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">Wifi</small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-5 h-5 rounded-sm bg-amber-300">
              <div className="w-4 h-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="var(--ci-primary-color, currentColor)"
                    d="M224,160H176V48H144V160H96V48H64V172c0,45.505,34.655,83.393,80,90.715V472h32V262.715c45.345-7.322,80-45.21,80-90.715V48H224Zm-64,72c-27.811,0-51.524-16.722-60.33-40H220.33C211.524,215.278,187.811,232,160,232Z"
                    className="ci-primary"
                  />
                  <path
                    fill="var(--ci-primary-color, currentColor)"
                    d="M413.567,40.187A138.648,138.648,0,0,0,296,177.224V344H400V472h32V37.351ZM400,312H328V177.224A105.986,105.986,0,0,1,400,76.313Z"
                    className="ci-primary"
                  />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Restaurante
              </small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-5 h-5 rounded-sm bg-amber-300">
              <div className="w-4 h-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0H32zM256 210.7L109.3 64H402.7L256 210.7z" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">Bar</small>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-5 h-5 rounded-sm bg-amber-300">
              <div className="w-4 h-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z" />
                </svg>
              </div>
            </div>
            <div>
              <small className="text-white font-AltoneNormal">
                Room service
              </small>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-300 w-[70rem] mt-3 "></div>
      </div>
    </>
  );
};
