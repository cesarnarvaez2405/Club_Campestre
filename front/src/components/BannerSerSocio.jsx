import React from "react";

export const BannerSerSocio = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full flex-col gap-7 ">
        <div className=" text-2xl flex justify-center items-center flex-col font-AltoneNormal">
          <span>¿Cómo</span>
          <span className=" text-amber-400"> Ser Socio?</span>
        </div>
        <div className=" font-AltoneNormal">
          <p className=" text-center">
            Únete a nuestra comunidad de socios y desfruta de una experiencia
            <span className=" text-amber-400">#ViveClubCampestre</span>. <br />
            Obtén detaller sobre cómo inscribirte y aprovechar al máximo tu
            membresía
          </p>
        </div>
        <button className=" border-2 border-amber-300 px-6 py-2 rounded-md text-amber-300 font-AltoneNormal hover:scale-110 transition-all ease-in-out duration-150 hover:border-white hover:bg-black hover:shadow-lg hover:shadow-amber-300">
          Quiero ser socio
        </button>
      </div>
    </>
  );
};
