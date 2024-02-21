import React from "react";
import { GoogleMaps } from "./Partials/googleMaps";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Link } from "react-router-dom";
import API from "../api/apiNode";

const apiKeyGoogle = API.googleMap;

export const Footer = () => {
  const center = { lat: 2.8356931949576785, lng: -75.29160131669344 };
  const zoom = 13;
  return (
    <>
      <div className=" w-full h-[20rem] bg-zinc-800 px-5 border-t-4 border-amber-300 ">
        <div className="grid w-full h-full grid-cols-3 px-4 py-4 ">
          <div className="flex flex-col items-start justify-start ">
            <span className="text-white text-wrap font-AltoneNormal">
              Kilometro <span className="font-sans ">12</span> vía al sur ,
              Rivera - Huila
            </span>
            <div className="w-48 h-48 pt-3 ">
              <Wrapper apiKey={apiKeyGoogle}>
                <GoogleMaps center={center} zoom={zoom} />
              </Wrapper>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start ">
            <img
              src="https://i.ibb.co/qY6Z6k1/Logo-club.png"
              alt="Logo-club"
              border="0"
              className="2xl:w-[100px] 2xl:h-[100px] w-[80px] h-[80px]"
            ></img>
            <span className="pt-5 text-white font-AltoneBold">
              Corporacion Club Campestre de Neiva
            </span>
            <span className="text-white text-wrap font-AltoneNormal">
              Telefonos:
              <span className="pl-2 font-sans ">
                3175021927 - 3157829360 - 3155661284
              </span>
            </span>
            <span className="text-white text-wrap font-AltoneNormal">
              Email: comunicaciones@clubcampestreneiva.com
            </span>
          </div>
          <div className="flex flex-col gap-3 text-right ">
            <span className="pt-5 text-2xl text-white font-AltoneNormal">
              Nuestras Redes
            </span>
            <div className="flex justify-end ">
              <div className="flex ">
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
            <div className="pt-5 ">
              <span className="text-white text-md font-AltoneNormal">
                Plataforma Club Campestre
              </span>
              <div className="flex justify-end pt-2 cursor-pointer ">
                <Link to={"/plataforma/login"} className=" hover:opacity-65">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-amber-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
