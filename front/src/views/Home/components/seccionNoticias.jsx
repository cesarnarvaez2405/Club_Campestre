import React from "react";

export const SeccionNoticias = () => {
  return (
    <>
      <div className="flex flex-col py-8 px-10 items-center w-full 2xl:h-[30rem] h-[25rem] bg-gray-400 ">
        <span className=" font-AltoneNormal text-2xl">Noticias</span>
        <div className=" grid grid-cols-3 gap-5 w-full h-full pt-4">
          <div className=" w-full h-full bg-blue-50"></div>
          <div className=" w-full h-full bg-blue-50"></div>
          <div className=" w-full h-full bg-blue-50"></div>
        </div>
      </div>
    </>
  );
};
