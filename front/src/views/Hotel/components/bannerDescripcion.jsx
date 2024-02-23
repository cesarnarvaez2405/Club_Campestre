import React from "react";

export const BannerDescripcion = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-4 justify-center items-center">
        <h2 className=" text-xl font-thin italic">
          Un oasis de elegancia en el corazón del Club Campestre de Neiva
        </h2>
        <h2 className=" font-semibold text-xl">Hotel Club Campestre</h2>
        <div className="border-t border-amber-300 w-[20rem] mt-3 "></div>
        <div className=" w-[50rem] py-7 text-justify font-thin ">
          <p>
            Descubre la serenidad en nuestras 10 cabañas cómodas y acogedoras,
            donde cada detalle ha sido cuidadosamente diseñado para ofrecerte
            una experiencia inolvidable. Disfruta de un baño privado con agua
            caliente, aire acondicionado y televisor de pantalla plana con señal
            por cable de alta definición. Además, podrás relajarte con productos
            de higiene personal gratuitos y un minibar a tu disposición.
            Experimenta la magia del departamento del Huila a través de la
            decoración inspirada en sus paisajes y sitios turísticos,
            sumergiéndote en un encuentro único con la naturaleza mientras te
            hospedas en el corazón del Club Campestre de Neiva
          </p>
        </div>
      </div>
    </>
  );
};
