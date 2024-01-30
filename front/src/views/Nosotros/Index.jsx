import React from "react";
import bannerImage from "../../style/images/jugandoTenis.jpg";

export const Nosotros = () => {
  return (
    <>
      <div
        className=" w-full h-[50rem] bg-slate-500 bg-top bg-no-repeat bg-cover brightness-75 "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      ></div>
    </>
  );
};
