import React from "react";
import ninosJugando from "../../../style/images/ninosJugando.jpg";

export const ContenidoElCLub = () => {
  return (
    <>
      <div className=" w-full">
        <div className=" w-full xl:px-[10rem]  px-[3rem] ">
          <div className=" h-full grid grid-cols-2 py-[5rem]">
            <div className=" col-span-1 flex flex-col justify-start items-end  gap-5 ">
              <div className=" flex justify-center items-center gap-2">
                <strong className=" font-AltoneNormal text-5xl font-semibold">
                  Nosotros
                </strong>
                <div className=" h-2 2xl:w-[30rem] xl:w-[20rem] w-[13rem] bg-amber-300"></div>
              </div>
              <div className="2xl:pl-10 text-justify pt-5 ">
                <p>
                  La <strong>Corporación Club Campestre de Neiva</strong>, es
                  una corporación de carácter civil, sin ánimo de lucro, que ha
                  de gobernarse por los presentes estatutos y normas que rigen
                  esta clase de personas jurídicas, por consiguiente, no
                  repartirá dividendos, ni utilidades entre sus Corporados. Sus
                  beneficios económicos los dedicará al cumplimiento y
                  desarrollo de su objeto principal.
                </p>
              </div>
            </div>
            <div className=" w-full h-full">
              <div
                className=" 2xl:w-[430px] xl:w-[380px] 2xl:h-full h-[300px] bg-white ml-10 bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${ninosJugando})`,
                }}
              ></div>
            </div>
          </div>
          <div className=" h-full grid grid-cols-2 py-[3rem]">
            <div className=" w-full h-full flex justify-end">
              <div
                className=" 2xl:w-[430px] w-[380px] 2xl:h-full h-[300px] bg-white mr-10 bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${ninosJugando})`,
                }}
              ></div>
            </div>
            <div className=" col-span-1 flex flex-col justify-start items-start  gap-5 ">
              <div className=" flex justify-center items-center gap-2">
                <div className=" h-2 2xl:w-[30rem] xl:w-[20rem] w-[13rem] bg-amber-300"></div>
                <strong className=" font-AltoneNormal text-5xl font-semibold">
                  Misión
                </strong>
              </div>
              <div className=" 2xl:pl-10 ">
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen. No sólo
                  sobrevivió 500 años, sino que tambien ingresó como texto de
                  relleno en documentos electrónicos, quedando esencialmente
                  igual al original.
                </p>
              </div>
            </div>
          </div>
          <div className=" h-full grid grid-cols-2 py-[5rem] ">
            <div className=" col-span-1 flex flex-col justify-start items-end  gap-5 ">
              <div className=" flex justify-center items-center gap-2">
                <strong className=" font-AltoneNormal text-5xl font-semibold">
                  Visión
                </strong>
                <div className=" h-2 2xl:w-[30rem] xl:w-[20rem] w-[13rem] bg-amber-300"></div>
              </div>
              <div className="2xl:pl-10 ">
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen. No sólo
                  sobrevivió 500 años, sino que tambien ingresó como texto de
                  relleno en documentos electrónicos, quedando esencialmente
                  igual al original.
                </p>
              </div>
            </div>
            <div className=" w-full h-full">
              <div
                className=" 2xl:w-[430px] xl:w-[380px] 2xl:h-full h-[300px] bg-white ml-10 bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${ninosJugando})`,
                }}
              ></div>
            </div>
          </div>
          <div className=" h-full grid grid-cols-2 py-[3rem]">
            <div className=" w-full h-full flex justify-end">
              <div
                className=" 2xl:w-[430px] w-[380px] 2xl:h-full h-[300px] bg-white mr-10 bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${ninosJugando})`,
                }}
              ></div>
            </div>
            <div className=" col-span-1 flex flex-col justify-start items-start gap-5 pb-[5rem] ">
              <div className=" flex justify-center items-center gap-2">
                <div className=" h-2 2xl:w-[30rem] xl:w-[20rem] w-[13rem] bg-amber-300"></div>
                <strong className=" font-AltoneNormal text-5xl font-semibold">
                  Historia
                </strong>
              </div>
              <div className=" 2xl:pl-10 text-justify ">
                <p>
                  El <strong>Club Campestre de Neiva</strong> fue fundado en el
                  año 1952 en un terreno inicial de aproximadamente 20
                  hectáreas, hoy son más de 49 que se han venido transformando
                  en áreas de vida, naturaleza, paz y esparcimiento, la idea
                  nació de un grupo de visionarios que fundaron el Club
                  Campestre ‘La Espantosa’.
                  <br />
                  El Club Campestre de Neiva en los últimos años viene teniendo
                  un importante protagonismo en la economía de la Región
                  Surcolombiana, se caracteriza por estar en permanente
                  movimiento, ofreciendo sus servicios con estándares
                  importantes a sus socios, además de generar ingresos a
                  proveedores y trabajo a la región;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
