import React from "react";

const bannerImageElClub =
  "https://clubcampestreneiva.site/IMG/ElClub/elclub_club_campestre(6).jpg";
const bannerImageInstalaciones =
  "https://clubcampestreneiva.site/IMG/ElClub/elclub_club_campestre(8).jpg";

export const BannerNosotros = ({ titulo, componente }) => {
  const getImageSrc = (componente) => {
    if (componente === "elClub") {
      return bannerImageElClub;
    }

    if (componente === "instalaciones") {
      return bannerImageInstalaciones;
    }

    return "";
  };

  return (
    <>
      <div className="w-full 2xl:h-[45rem] h-[35rem]">
        <img
          className={` w-full h-full block bg-slate-500 brightness-75 object-cover ${
            componente === "elClub" ? " object-top" : "object-center"
          }`}
          src={getImageSrc(componente)}
          alt=""
        />
        <div className=" w-full 2xl:h-[45rem] h-[35rem] absolute top-0 flex justify-center items-center z-30">
          <div className=" flex flex-col 2xl:text-xl 2xl:px-[30rem] px-56 text-center gap-6">
            <h1
              className={` text-white font-AltoneBold animate__animated animate__fadeInDown  ${
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
