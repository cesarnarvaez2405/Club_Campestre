import React from "react";
import { GoogleMaps } from "./Partials/googleMaps";
import { Wrapper } from "@googlemaps/react-wrapper";
import logoBlanco from "../style/images/logoCampestreBlanco.png";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/16/solid";

const apiKeyGoogle = import.meta.env.VITE_GOOGLE_KEY;

export const Footer = () => {
  const center = { lat: 2.8356931949576785, lng: -75.29160131669344 };
  const zoom = 13;
  return (
    <>
      <div className=" w-full h-[20rem] bg-zinc-800 px-5 border-t-4 border-amber-300 ">
        <div className=" w-full h-full grid grid-cols-3 py-4 px-4">
          <div className=" flex-col flex items-start justify-start">
            <span className=" text-white font-serif">
              Kilometro 12 Vía al sur, Rivera - Huila
            </span>
            <div className=" w-48 h-48 pt-3">
              <Wrapper apiKey={apiKeyGoogle}>
                <GoogleMaps center={center} zoom={zoom} />
              </Wrapper>
            </div>
          </div>
          <div className=" flex justify-start items-center flex-col">
            <div
              className=" bg-center bg-no-repeat bg-cover 2xl:w-[100px] 2xl:h-[100px] w-[80px] h-[80px] "
              style={{
                backgroundImage: `url(${logoBlanco})`,
              }}
            ></div>
            <span className=" text-white font-serif">
              Corporacion Club Campestre de Neiva
            </span>
          </div>
          <div className=" flex flex-col gap-3 text-right">
            <span className=" text-2xl text-white font-serif">Contacto</span>
            <div className=" flex justify-end gap-4">
              <span className=" text-white text-wrap">
                3175021927 - 3157829360 - 3155661284
              </span>
              <PhoneIcon className=" w-6 h-6 text-amber-300" />
            </div>
            <div className=" flex justify-end gap-4">
              <span className=" text-white text-wrap">
                comunicaciones@clubcampestreneiva.com
              </span>
              <EnvelopeIcon className=" h-6 w-6 text-amber-300" />
            </div>
            <span className=" pt-5 text-white font-serif text-2xl">
              Nuestras Redes
            </span>
            <div className=" flex justify-end">
              <div className=" flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-whatsapp"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fcd34d"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-facebook"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fcd34d"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-tiktok"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fcd34d"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
