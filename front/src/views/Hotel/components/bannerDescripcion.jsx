import React from "react";

export const BannerDescripcion = () => {
  return (
    <>
      <div className=' w-full flex flex-col gap-4 justify-center items-center sm:max-md:py-10 sm:max-md:px-5'>
        <h2 className=' text-xl font-thin italic'>
          Un oasis de elegancia en el corazón del Club Campestre de Neiva
        </h2>
        <h2 className=' font-semibold text-xl sm:max-md:pt-10'>
          Hotel Club Campestre
        </h2>
        <div className='border-t border-amber-300 w-[20rem] mt-3 '></div>
        <div className=' w-[50rem] py-7 text-justify font-thin sm:max-md:w-full sm:max-md:py-2 '>
          <p>
            Las cabañas de nuestro Hotel gozan de la preferencia de propios y
            visitantes que eligen al Huila como destino turístico, pues ven en
            esta la mejor combinación entre descanso y comodidad.
            <br />
            <br />
            En las diez confortables cabañas que tenemos, nuestros huéspedes
            pueden disfrutar del contacto con la naturaleza y el confort de cada
            una de las habitaciones que han sido decoradas con imágenes de
            bellos paisajes y sitios turísticos de nuestro Departamento,
            enamorándolos con nuestros paraísos huilense, disfrutando de un
            excelente ambiente que se adorna con la frescura de la naturaleza
            que lo rodea.
          </p>
        </div>
      </div>
    </>
  );
};
