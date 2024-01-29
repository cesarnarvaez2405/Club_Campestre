import React from "react";
import { GoogleMaps } from "./Partials/googleMaps";
import { Wrapper } from "@googlemaps/react-wrapper";
import logoBlanco from "../style/images/logoCampestreBlanco.png";

export const Footer = () => {
  const center = { lat: 2.8356931949576785, lng: -75.29160131669344 };
  const zoom = 13;
  return (
    <>
      <div className=" w-full h-[20rem] bg-zinc-800 ">
        <div className=" w-full h-1 bg-amber-300"></div>
        <div className=" w-full h-full grid grid-cols-3 py-4 px-4">
          <div className=" flex-col flex items-start justify-start">
            <span className=" text-white font-serif">
              Kilometro 12 Vía al sur, Rivera - Huila
            </span>
            <div className=" w-48 h-48 pt-3">
              <Wrapper apiKey="AIzaSyDdYjmsnLB5l0kbUzq6nlXHpiu_j-RCvJ8">
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
          <div className=" flex flex-col  text-right">
            <span className=" text-2xl text-white font-serif">Contacto</span>
            <div>
              <span className=" text-white text-wrap">
                3175021927 - 3157829360 - 3155661284
              </span>
            </div>
            <div></div>
            <span className=" text-white text-wrap">
              3175021927 - 3157829360 - 3155661284
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
