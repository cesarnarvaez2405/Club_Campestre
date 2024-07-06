import React, { useState } from "react";
import { convenios } from "../../../utils/conveniosData";
import { ListaDeClubes } from "./listaDeClubes";
import { menuCanjes } from "../../../utils/data";

export const Listado = () => {
  const [ciudadCanje, setCiudadCanje] = useState("bogota");
  return (
    <>
      <div>
        <div className=' w-full flex flex-col gap-4 justify-center items-center py-16'>
          <h2 className=' text-xl font-thin italic sm:max-md:px-5'>
            El Club Campestre de Neiva tiene convenios con los mejores clubes
            nacionales
          </h2>
          <div className=' px-80 py-10 sm:max-md:px-5'>
            <p className=' font-AltoneNormal text-justify'>
              El {""}
              <span className=' font-AltoneBold'>Club Campestre de Neiva </span>
              tiene convenio con más de
              <span className='font-sans font-semibold'> 47</span> Clubes a
              nivel nacional, tanto Club emisor como receptor.
              <br /> <br /> El procedimiento de entrada al Club Campestre de
              Neiva cuando un socio procedente de otro Club y tiene canje con el
              Club Campestre de Neiva, debe presentar en la portería su tarjeta
              de canje, el carné actualizado que lo identifique como socio del
              Club de procedencia y la cédula de ciudadanía. La tarjeta de canje
              que expide el Club a sus socios debe contener la siguiente
              información:
            </p>
            <div className='flex flex-col pt-20 justify-center items-center gap-10 px-10'>
              <h2 className='font-AltoneBold'>
                Nuestro horario de administración para legalizar los canjes
              </h2>
              <div className='flex flex-col gap-10 justify-center items-center'>
                <p className='text-xl font-thin italic'>
                  De martes a Sábado de 7:00 a.m. a 5:00 p.m.
                </p>
                <p className=' font-AltoneNormal text-justify px-10 sm:max-md:px-1'>
                  Los fines de semana, domingos y festivos o después del horario
                  de oficina, la portería exige los documentos anteriormente
                  detallados para permitir el ingreso del socio solicitante.
                  <br />
                  Nuestro convenio de canje establece que los socios
                  solicitantes tienen{" "}
                  <span className='font-sans font-semibold'> 30</span> días al
                  año máximo de acceso al Club Campestre de Neiva, en períodos
                  mínimos de <span className='font-sans font-semibold'> 1</span>{" "}
                  día.
                  <br />
                  <br /> Cuando los socios de otros Clubes ingresan al Club
                  Campestre de Neiva deben presentar la tarjeta expedida por la
                  Gerencia, el carné del Club de procedencia y su documento de
                  identificación para verificar que el portador del canje es el
                  titular correspondiente. Nota: No se aceptan canjes por fax,
                  ni elaborados a mano.
                </p>
              </div>
            </div>

            <div className='flex flex-col pt-20 justify-center items-center gap-10 px-10 sm:max-md:px-1'>
              <h2 className='font-AltoneBold'>
                Derechos y Obligaciones de los socios en canje
              </h2>
              <div className='flex flex-col gap-10 justify-center items-center'>
                <ul className='list-disc list-inside font-AltoneNormal text-justify px-10'>
                  <li>
                    Podrán beneficiarse de este derecho de una manera gratuita
                    por un mes al año contado a partir del primero de enero y
                    por un mes más, pagando la cuota ordinaria de Socio Activo
                    del Club visitado.
                  </li>
                  <li>
                    El socio que solicita el canje acepta de hecho los Estatutos
                    y Reglamentos del Club que se lo otorga y quedará sometido a
                    ellos mientras haga uso de él.
                  </li>
                  <li>El canje no da derecho a la firma de vales.</li>
                  <li>
                    La persona que desee beneficiarse de los derechos otorgados
                    a los socios de canje deberá presentar en la secretaría del
                    Club, en el cual quiera ser recibido, la Tarjeta de Canje
                    expedida por el Club del cual es socio, de fecha no anterior
                    a <span className='font-sans font-semibold'> 30</span> días,
                    tarjeta que quedará en poder del Club que da el canje.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className=' font-semibold text-xl'>Lista de Clubes</h2>
          <div className='border-t border-amber-300 w-[20rem] mt-3 pb-6'></div>
          <div className=' w-full h-16 divide-x gap-4 py-2 2xl:px-[16rem] lg:px-[2rem] grid grid-cols-7 justify-center items-center sm:max-md:grid-cols-4  '>
            {menuCanjes.map((servicio, index) => (
              <button
                onClick={() => setCiudadCanje(servicio.id)}
                key={index}
                className={`h-full py-2 bg-slate-200 flex justify-center rounded-md items-center font-AltoneNormal xl:text-sm text-xs text-black hover:text-amber-300 hover:bg-gray-600 duration-150 ease-in-out cursor-pointer text-wrap  ${
                  ciudadCanje === servicio.id && "bg-slate-400"
                }`}
              >
                <span className=' capitalize'>{servicio.id} </span>
              </button>
            ))}
          </div>
          <ListaDeClubes convenios={convenios} ciudad={ciudadCanje} />
        </div>
      </div>
    </>
  );
};
