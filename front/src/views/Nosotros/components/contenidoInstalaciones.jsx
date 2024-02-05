import React from "react";
import futbol from "../../../style/images/futbol.jpg";
import golf from "../../../style/images/golf.jpg";
import tenis from "../../../style/images/tenis.jpg";
import natacion from "../../../style/images/natacion.jpg";
import restaurante from "../../../style/images/restaurante.png";
import salones from "../../../style/images/salones.png";

export const ContenidoInstalaciones = () => {
  const deportes = [
    {
      nombre: "Cancha de Futbol",
      imagen: futbol,
      descripcion:
        "Emblemática cancha de fútbol en el Club Campestre, donde la pasión del juego se fusiona con la belleza natural del entorno. Un escenario perfecto para encuentros intensos y momentos inolvidables en el corazón del deporte",
    },
    {
      nombre: "Campo de Golf",
      imagen: golf,
      descripcion:
        "Nuestro campo de golf, además de ser el único y el mejor del sur de Colombia, se encuentra al nivel de los mejores del país, permitiendo que quienes disfrutan de este deporte puedan pasar estupendas jornadas deportivas.",
    },
    {
      nombre: "Cancha de Tenis",
      imagen: tenis,
      descripcion:
        "La cancha de tenis en el Club Campestre, un oasis deportivo rodeado de naturaleza, ofrece un escenario perfecto para partidos apasionantes en un ambiente distinguido y sereno.",
    },
    {
      nombre: "Picinas de Natacion",
      imagen: natacion,
      descripcion:
        "La moderna piscina de competición en el Club Campestre, lista para desafíos acuáticos. Sumérgete en un entorno deportivo de alto rendimiento y siente la emoción de la competencia en cada brazada.",
    },
  ];

  return (
    <>
      <div className=' w-full h-full bg-zinc-800 '>
        <div className=' flex justify-center items-center pt-10 flex-col'>
          <span className=' font-AltoneNormal text-3xl text-white'>
            Deportivas
          </span>
          <div className='border-t border-amber-300 w-[20rem] mt-3 '></div>
        </div>
        <div className=' 2xl:px-[8rem] px-[2rem] py-[2rem] '>
          <div className='flex flex-wrap justify-center'>
            {deportes.map((deporte, index) => (
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                <div className='bg-white rounded shadow p-6'>
                  <img
                    src={deporte.imagen}
                    alt={deporte.nombre}
                    className='w-full h-64 object-cover mb-4 rounded'
                  />
                  <h2 className='text-2xl font-bold mb-2 font-Tommy'>
                    {deporte.nombre}
                  </h2>
                  <p className='text-sm sm:text-base lg:text-base font-AltoneNormal'>
                    {deporte.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=' flex justify-center items-center pt-10 flex-col'>
          <span className=' font-AltoneNormal text-3xl text-white'>
            Restaurante
          </span>
          <div className='border-t border-amber-300 w-[20rem] mt-3 '></div>
        </div>
        <div className=' flex justify-center items-center py-[2rem] '>
          <div className=' w-[50%] h-[45rem] bg-white rounded p-6 '>
            <img
              src={restaurante}
              alt={"natacion"}
              className='w-full h-[30rem] object-cover object-center mb-4 rounded'
            />
            <p className='text-sm sm:text-base lg:text-base font-AltoneNormal'>
              Quienes quieren degustar de la buena mesa, saben que en el Club
              Campestre de Neiva está una de las mejores opciones si de
              restaurantes se trata, la ofrece nuestro Club, donde además de una
              exquisita y variada oferta de entradas, platos fuertes, postres y
              bebidas, las locaciones de sus comedores son muy agradables y para
              todos los gustos.La cocina del Club Campestre de Neiva, es
              liderada por un reconocido y destacado Chef quien día a día
              sorprende a sus comensales con deliciosas recetas nacionales e
              internacionales.
            </p>
          </div>
        </div>
        <div className=' flex justify-center items-center pt-10 flex-col'>
          <span className=' font-AltoneNormal text-3xl text-white'>
            Salones
          </span>
          <div className='border-t border-amber-300 w-[20rem] mt-3 '></div>
        </div>
        <div className=' flex justify-center items-center py-[2rem] '>
          <div className=' w-[50%] h-[50  rem] bg-white rounded p-6 '>
            <img
              src={salones}
              alt={"natacion"}
              className='w-full h-[30rem] object-cover object-center mb-4 rounded'
            />
            <p className='text-sm sm:text-base lg:text-base font-AltoneNormal'>
              Los Salones sociales de nuestro Club, gozan de gran preferencia en
              toda la región, pues con un total de cinco salones se puede
              atender eventos de hasta{" "}
              <strong className=' font-sans'>2000</strong> personas en
              simultaneo, lo que sin duda es un gran honor. Para ello, contamos
              con gran variedad a la hora de la decoración de nuestros sitios de
              recepción, los cuales hemos bautizado con los nombres de Salón
              Principal, que posee a su vez los salones Azul y Cincuentenario;
              el salón La Espantosa, Guinness, Presidente y Salón de televisión.
              En nuestros salones sociales, se puede disfrutar de mucha
              elegancia, sobriedad o privacidad, dependiendo de las necesidades
              de quien haya elegido al Club Campestre de Neiva, para la
              realización de sus eventos y recepciones.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
