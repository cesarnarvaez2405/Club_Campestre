import React from "react";
import { deportes, menuServicios } from "../../../utils/data";
import restaurante from "../../../style/images/restaurante.png";
import salones from "../../../style/images/salones.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/instalaciones.css";

export const ContenidoInstalaciones = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <div className=" w-full h-full bg-zinc-800 ">
        <div className=" w-full h-16 divide-x divide-amber-300 py-2 2xl:px-[16rem] lg:px-[2rem] grid grid-cols-7 justify-center items-center ">
          {menuServicios.map((servicio, index) => (
            <div className=" h-full  flex justify-center items-center font-AltoneNormal xl:text-sm text-xs text-white hover:text-amber-300 hover:bg-gray-600 duration-150 ease-in-out cursor-pointer text-wrap ">
              <span>{servicio.titulo} </span>
            </div>
          ))}
        </div>
        <div className=" flex justify-center items-center pt-10 flex-col">
          <img
            src="https://i.ibb.co/dpgQ9TD/titulo-Evento-Sociales23png.png"
            alt="Logo-club"
            border="0"
            className=" "
          ></img>
          <div className="border-t border-amber-300 w-[40rem] mt-3 "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] ">
          <div className=" px-[16rem] text-justify py-4 text-wrap text-white">
            <p>
              Los <strong>Salones sociales </strong> de nuestro Club, gozan de
              gran preferencia en toda la región, pues con un total de ocho
              salones, se pueden atender eventos de hasta 2.000 personas en
              simultáneo, lo que sin duda es un gran honor. Para ello, contamos
              con gran variedad a la hora de la decoración de nuestros sitios de
              recepción, los cuales hemos bautizado con los nombres de Salón
              Principal, que posee a su vez el salón Azul y Cincuentenario, el
              salón La Espantosa, Guinness, Presidente y Salón de televisión. En
              nuestros salones sociales, se puede disfrutar de mucha elegancia,
              sobriedad o privacidad, dependiendo de las necesidades de quien
              haya elegido al Club Campestre de Neiva, para la realización de
              sus eventos y recepciones.
            </p>
          </div>
          <div className="flex flex-wrap justify-start px-[16rem]">
            {deportes.map((deporte, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="">
                  <img
                    src={deporte.imagen}
                    alt={deporte.nombre}
                    className="w-full h-64 object-cover mb-2 shadow-md"
                  />
                  <div className=" flex flex-col justify-center items-start">
                    <h2 className="text-2xl mb-2 font-thin text-white">
                      {deporte.nombre}
                    </h2>
                    <small className=" text-white">
                      ({deporte.titulo} {deporte.subTitulo})
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-center items-center pt-10 flex-col">
          <img
            src="https://i.ibb.co/nbF8SSV/Sin-t-tulo-5.png"
            alt="Sin-t-tulo-5"
            border="0"
          ></img>
          <div className="border-t border-amber-300 w-[40rem] mt-3 "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] pb-[5rem] ">
          <div className=" px-[23rem] text-justify py-4 text-wrap text-white">
            <p>
              La <strong>Capilla de Club Campestre</strong> de Neiva, ofrece a
              los feligreses la oportunidad de reafirmar su Fe y vivir los
              eventos religiosos más importantes con enorme comodidad y confort.
              Es una de las preferidas en la región para bodas, bautizos y
              comuniones
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={600}
            />
          </div>
        </div>
        <div className=" flex justify-center items-center pt-10 flex-col">
          <img
            src="https://i.ibb.co/SRPShQM/piscinas-YTobogan.png"
            alt="piscinas-YTobogan"
            border="0"
          ></img>
          <div className="border-t border-amber-300 w-[40rem] mt-3 "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] ">
          <div className=" px-[23rem] text-justify py-4 text-wrap text-white">
            <p>
              El clima de nuestra región, hace que las piscinas sean uno de
              nuestros mayores atractivos si de pasarla a gusto en familia se
              trata. Con un total de tres piscinas, las cuales gozan de total
              seguridad y normas de higiene, el Club Campestre de Neiva,
              complace día a día a sus visitantes con una excelente opción para
              refrescarse. En nuestro Club, además de piscinas especiales para
              todas las edades, también hay un divertido tobogán, que hace de
              las visitas al Club un paseo inolvidable
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
};
