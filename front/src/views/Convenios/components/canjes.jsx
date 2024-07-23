import React from "react";

const bannerImageElClub = "https://i.ibb.co/yVKB4XP/DSC-0987.jpg";

export const Canjes = () => {
  return (
    <>
      <div className="w-full 2xl:h-[45rem] h-[35rem] animate__animated animate__fadeIn">
        <div
          className=" w-full h-full block bg-slate-500 bg-center bg-no-repeat bg-cover brightness-75 "
          style={{
            backgroundImage: `url(${bannerImageElClub})`,
          }}
        ></div>
        <div className=" w-full 2xl:h-[45rem] h-[35rem] absolute top-0 flex justify-center items-center z-30">
          <div className=" flex flex-col 2xl:text-xl 2xl:px-[30rem]  text-center gap-6">
            <h1
              className={` text-white font-AltoneBold  ${"text-6xl sm:max-md:text-4xl"}  font-semibold `}
            >
              Convenios - Canjes
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
