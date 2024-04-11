import React from "react";

const bannerImageElClub = "https://i.ibb.co/71G0nCZ/1.jpg";
const bannerImageInstalaciones =
  "https://i.ibb.co/rbS07Dm/campo-Golf-Club-Campestre.jpg";

export const BannerNosotros = ({ titulo, componente }) => {
  return (
    <>
      <div className="w-full 2xl:h-[45rem] h-[35rem]">
        <div
          className={` w-full h-full block bg-slate-500  bg-no-repeat bg-cover brightness-75 ${
            componente === "elClub" ? "bg-top" : "bg-center"
          }`}
          style={{
            backgroundImage: `url(${
              componente === "elClub"
                ? bannerImageElClub
                : bannerImageInstalaciones
            })`,
          }}
        ></div>
        <div className=" w-full 2xl:h-[45rem] h-[35rem] absolute top-0 flex justify-center items-center z-30">
          <div className=" flex flex-col 2xl:text-xl 2xl:px-[30rem] px-56 text-center gap-6">
            <h1
              className={` text-white font-AltoneBold  ${
                componente === "elClub"
                  ? "text-7xl sm:max-md:text-5xl"
                  : "text-6xl sm:max-md:text-5xl"
              }  font-semibold`}
            >
              {titulo}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
