import React, { useEffect, useState } from "react";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import "../style/instalaciones.css";
import { galeriaRestaurante } from "../utils/restauranteData";

export const Restaurante = () => {
  const [imagenesRestaurante, setImagenesRestaurante] = useState([]);
  const [isHovered, setIsHovered] = useState({
    isHover: false,
    indexHover: null,
  });

  useEffect(() => {
    const nuevasImagenesRestaurante = galeriaRestaurante.map(
      (restaurante) => restaurante.imagen
    );
    setImagenesRestaurante(nuevasImagenesRestaurante);
  }, []);

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className=" flex justify-center items-center pt-10 flex-col sm:max-md:pt-20 ">
          <img
            src="https://i.ibb.co/SPTQbfj/restaurante-Internacional.png"
            alt="restaurante-Internacional"
            border="0"
          ></img>
          <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[10rem] "></div>
        </div>
        <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-5">
          <div className=" px-[23rem] md:px-48 text-justify py-4 text-wrap text-white sm:max-md:px-1">
            <p>
              Quienes quieren degustar de la buena mesa, saben que en el Club
              Campestre de Neiva está una de las mejores opciones si de
              restaurantes se trata. Además de una exquisita y variada oferta de
              entradas, platos fuertes, postres y bebidas, las locaciones de sus
              comedores son muy agradables para todos los gustos. La cocina del
              Club Campestre de Neiva, es liderada por un reconocido y destacado
              Chef quien día a día sorprende a sus comensales con deliciosas
              recetas nacionales e internacionales
            </p>
          </div>

          <div className="flex justify-center items-center py-10">
            <div className="w-[60%] sm:max-md:w-[90%] ">
              <div className="grid grid-cols-3 gap-4 sm:max-md:grid-cols-1 ">
                {galeriaRestaurante.map((restaurante, index) => (
                  <div key={index}>
                    <RViewer imageUrls={imagenesRestaurante}>
                      <div
                        className="relative"
                        onMouseEnter={() =>
                          setIsHovered({ isHover: true, indexHover: index })
                        }
                        onMouseLeave={() =>
                          setIsHovered({ isHover: false, indexHover: null })
                        }
                      >
                        <RViewerTrigger index={index}>
                          <img
                            src={restaurante.imagen}
                            alt={restaurante.nombre}
                            className="w-full h-64 object-cover mb-2 shadow-md cursor-pointer hover:blur transition-all ease-in-out hover:brightness-75"
                          />
                        </RViewerTrigger>
                        {isHovered.isHover &&
                          isHovered.indexHover === index && (
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-2xl font-thin text-white">
                              Ver Imagen
                            </p>
                          )}
                      </div>
                    </RViewer>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
