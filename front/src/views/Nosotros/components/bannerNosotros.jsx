import React from "react";
import bannerImage from "../../../style/images/jugandoTenis.jpg";

export const BannerNosotros = () => {
  return (
    <>
      <div className='w-full 2xl:h-[50rem] h-[40rem]'>
        <div
          className=' w-full h-full block bg-slate-500 bg-top bg-no-repeat bg-cover brightness-75 '
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        ></div>
        <div className=' w-full 2xl:h-[50rem] h-[40rem] absolute top-0 flex justify-center items-center z-30'>
          <div className=' flex flex-col 2xl:text-xl 2xl:px-[30rem] px-56 text-center gap-6'>
            <span className=' text-white text-6xl font-AltoneNormal'>
              Nosotros
            </span>
            <span className=' text-white font-AltoneNormal '>
              Un espacio para el intercambio de conocimientos y experiencias que
              te permitirá establecer nuevos vinculos y explorar otras
              posibilidades profesionales y laborales en un ambiente ideal
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
