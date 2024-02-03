import React from "react";
import logoHotel from "../../../style/images/HotelClubCampestre.png";
import { WifiIcon } from "@heroicons/react/16/solid";

export const BannerHotel = React.forwardRef((props, ref) => {
  return (
    <>
      <div className=" w-full 2xl:h-[147px] h-[128px] bg-zinc-800 p-2 z-40 ">
        <div
          ref={ref}
          className=" w-full h-full border-2 rounded-md border-amber-300 flex flex-row justify-center items-center gap-12"
        >
          <div
            className=" w-[12rem] h-[5rem] bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${logoHotel})`,
            }}
          ></div>
          <div className=" h-full w-[40%]  grid grid-cols-5 ">
            <div className=" flex flex-col justify-center items-center">
              <div className=" w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#fcd34d"
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"
                  />
                </svg>
              </div>
              <div>
                <small className=" font-AltoneNormal text-white">
                  Parqueadero
                </small>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <div className=" w-5 h-5 bg-amber-300 flex justify-center items-center rounded-sm ">
                <div className=" h-4 w-4">
                  <WifiIcon />
                </div>
              </div>
              <div>
                <small className=" font-AltoneNormal text-white">Wifi</small>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <div className=" w-5 h-5 bg-amber-300 flex justify-center items-center rounded-sm ">
                <div className=" h-4 w-4">
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
                <small className=" font-AltoneNormal text-white">
                  Restaurante
                </small>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <div className=" w-5 h-5 bg-amber-300 flex justify-center items-center rounded-sm ">
                <div className=" h-4 w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0H32zM256 210.7L109.3 64H402.7L256 210.7z" />
                  </svg>
                </div>
              </div>
              <div>
                <small className=" font-AltoneNormal text-white">Bar</small>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <div className=" w-5 h-5 bg-amber-300 flex justify-center items-center rounded-sm ">
                <div className=" h-4 w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z" />
                  </svg>
                </div>
              </div>
              <div>
                <small className=" font-AltoneNormal text-white">
                  Room service
                </small>
              </div>
            </div>
          </div>
          <div>
            <a
              href="https://wa.me/3175021927?text=Quiero%20reserver%20en%20el%20Hotel%20Club%20Campestre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-amber-300 px-6 py-2 rounded-md text-amber-300 font-AltoneNormal hover:scale-110 transition-all ease-in-out duration-150">
                Reserva Ya
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
});
