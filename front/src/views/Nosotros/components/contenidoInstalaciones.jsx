import React, { useEffect, useState } from "react";
import { salones, menuServicios, deportes } from "../../../utils/data";
import restaurante from "../../../style/images/restaurante.png";
import ImageGallery from "react-image-gallery";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import PhotoAlbum from "react-photo-album";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/instalaciones.css";

export const ContenidoInstalaciones = () => {
  const [imagenesSalones, setImagenesSalones] = useState([]);
  const [opcionServicio, setOpcionServicio] = useState(0);
  const [verHorarios, setVerHorarios] = useState(false);
  const [atencionSocio, setAtencionSocio] = useState(false);

  useEffect(() => {
    const nuevasImagenesSalones = salones.map((salon) => salon.imagen);
    setImagenesSalones(nuevasImagenesSalones);
  }, []);

  const imagesPiscinas = [
    {
      original: "https://i.ibb.co/SmsTJYY/IMG-6801.jpg",
      thumbnail: "https://i.ibb.co/SmsTJYY/IMG-6801.jpg",
      src: "https://i.ibb.co/SmsTJYY/IMG-6801.jpg",
    },
    {
      original:
        "https://i.ibb.co/8714TrL/DJI-0349-MP4-00-00-15-43-Imagen-fija001.jpg",
      thumbnail:
        "https://i.ibb.co/8714TrL/DJI-0349-MP4-00-00-15-43-Imagen-fija001.jpg",
      src: "https://i.ibb.co/8714TrL/DJI-0349-MP4-00-00-15-43-Imagen-fija001.jpg",
    },
    {
      original: "https://i.ibb.co/5YSV0mv/IMG-6802.jpg",
      thumbnail: "https://i.ibb.co/5YSV0mv/IMG-6802.jpg/",
      src: "https://i.ibb.co/5YSV0mv/IMG-6802.jpg",
    },
    {
      original: "https://i.ibb.co/qrpknXr/IMG-6803.jpg",
      thumbnail: "https://i.ibb.co/qrpknXr/IMG-6803.jpg/",
      src: "https://i.ibb.co/qrpknXr/IMG-6803.jpg",
    },
    {
      original: "https://i.ibb.co/rsrGRJ9/IMG-6804.jpg",
      thumbnail: "https://i.ibb.co/rsrGRJ9/IMG-6804.jpg/",
      src: "https://i.ibb.co/rsrGRJ9/IMG-6804.jpg",
    },
    {
      original: "https://i.ibb.co/5Gp61sH/IMG-6807.jpg",
      thumbnail: "https://i.ibb.co/5Gp61sH/IMG-6807.jpg/",
      src: "https://i.ibb.co/5Gp61sH/IMG-6807.jpg",
    },
    {
      original:
        "https://i.ibb.co/Tc0pJ8f/Whats-App-Image-2023-03-22-at-10-43-25-AM-2.jpg",
      thumbnail:
        "https://i.ibb.co/Tc0pJ8f/Whats-App-Image-2023-03-22-at-10-43-25-AM-2.jpg/",
      src: "https://i.ibb.co/Tc0pJ8f/Whats-App-Image-2023-03-22-at-10-43-25-AM-2.jpg",
    },
    {
      original:
        "https://i.ibb.co/drks9WY/DJI-0349-MP4-00-00-02-16-Imagen-fija002.jpg",
      thumbnail:
        "https://i.ibb.co/drks9WY/DJI-0349-MP4-00-00-02-16-Imagen-fija002.jpg",
      src: "https://i.ibb.co/drks9WY/DJI-0349-MP4-00-00-02-16-Imagen-fija002.jpg",
    },
  ];

  const imagesGuarderia = [
    {
      original: "https://i.ibb.co/X3JH9r3/DSC-0943.jpg",
      thumbnail: "https://i.ibb.co/X3JH9r3/DSC-0943.jpg",
      src: "https://i.ibb.co/X3JH9r3/DSC-0943.jpg",
    },
    {
      original: "https://i.ibb.co/8cM8P8n/DSC-0923.jpg",
      thumbnail: "https://i.ibb.co/8cM8P8n/DSC-0923.jpg",
      src: "https://i.ibb.co/8cM8P8n/DSC-0923.jpg",
    },
  ];

  const imagesCapilla = [
    {
      original:
        "https://i.ibb.co/QHshg1L/Whats-App-Image-2017-11-06-at-11-44-23-AM.jpg",
      thumbnail:
        "https://i.ibb.co/QHshg1L/Whats-App-Image-2017-11-06-at-11-44-23-AM.jpg",
      src: "https://i.ibb.co/QHshg1L/Whats-App-Image-2017-11-06-at-11-44-23-AM.jpg",
    },
    {
      original:
        "https://i.ibb.co/TMB9KY6/Whats-App-Image-2017-11-06-at-11-44-28-AM.jpg",
      thumbnail:
        "https://i.ibb.co/TMB9KY6/Whats-App-Image-2017-11-06-at-11-44-28-AM.jpg",
      src: "https://i.ibb.co/TMB9KY6/Whats-App-Image-2017-11-06-at-11-44-28-AM.jpg",
    },
    {
      original: "https://i.ibb.co/x29GTB9/IMG-8348.jpg",
      thumbnail: "https://i.ibb.co/x29GTB9/IMG-8348.jpg",
      src: "https://i.ibb.co/x29GTB9/IMG-8348.jpg",
    },
    {
      original: "https://i.ibb.co/M1g33bS/IMG-8351.jpg",
      thumbnail: "https://i.ibb.co/M1g33bS/IMG-8351.jpg",
      src: "https://i.ibb.co/M1g33bS/IMG-8351.jpg",
    },
  ];

  const photos = [
    { src: "https://picsum.photos/id/1018/250/150/", width: 250, height: 150 },
    { src: "https://picsum.photos/id/1015/250/150/", width: 100, height: 120 },
    { src: "https://picsum.photos/id/1015/250/150/", width: 110, height: 50 },
    { src: "https://picsum.photos/id/1015/250/150/", width: 100, height: 120 },
    { src: "https://picsum.photos/id/1018/250/150/", width: 250, height: 150 },
  ];

  return (
    <>
      <div className=" w-full h-full bg-zinc-800 ">
        <div className=" w-full h-16 divide-x divide-amber-300 py-2 2xl:px-[16rem] lg:px-[2rem] grid grid-cols-7 justify-center items-center ">
          {menuServicios.map((servicio, index) => (
            <button
              onClick={() => setOpcionServicio(servicio.id)}
              className={`h-full  flex justify-center items-center font-AltoneNormal xl:text-sm text-xs text-white hover:text-amber-300 hover:bg-gray-600 duration-150 ease-in-out cursor-pointer text-wrap  ${
                opcionServicio === servicio.id && "border-b"
              }`}
            >
              <span>{servicio.titulo} </span>
            </button>
          ))}
        </div>
        {opcionServicio == 0 && (
          <div>
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
                  Los <strong>Salones sociales </strong> de nuestro Club, gozan
                  de gran preferencia en toda la región, pues con un total de
                  ocho salones, se pueden atender eventos de hasta 2.000
                  personas en simultáneo, lo que sin duda es un gran honor. Para
                  ello, contamos con gran variedad a la hora de la decoración de
                  nuestros sitios de recepción, los cuales hemos bautizado con
                  los nombres de Salón Principal, que posee a su vez el salón
                  Azul y Cincuentenario, el salón La Espantosa, Guinness,
                  Presidente y Salón de televisión. En nuestros salones
                  sociales, se puede disfrutar de mucha elegancia, sobriedad o
                  privacidad, dependiendo de las necesidades de quien haya
                  elegido al Club Campestre de Neiva, para la realización de sus
                  eventos y recepciones.
                </p>
              </div>
              <div className="flex flex-wrap justify-start px-[16rem] ">
                <RViewer imageUrls={imagenesSalones}>
                  {salones.map((deporte, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer"
                    >
                      <div className="">
                        <RViewerTrigger index={index}>
                          <img
                            src={deporte.imagen}
                            alt={deporte.nombre}
                            className="w-full h-64 object-cover mb-2 shadow-md"
                          />
                        </RViewerTrigger>

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
                </RViewer>
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 1 && (
          <div>
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
                  La <strong>Capilla de Club Campestre</strong> de Neiva, ofrece
                  a los feligreses la oportunidad de reafirmar su Fe y vivir los
                  eventos religiosos más importantes con enorme comodidad y
                  confort. Es una de las preferidas en la región para bodas,
                  bautizos y comuniones
                </p>
              </div>

              <div className=" flex justify-center items-center">
                <ImageGallery
                  items={imagesCapilla}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay={true}
                  slideDuration={600}
                />
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 4 && (
          <div>
            <div className=" flex justify-center items-center pt-10 flex-col">
              <img
                src="https://i.ibb.co/C0r5k5H/escenarios-Depor.png"
                alt="escenarios-Depor"
                border="0"
              ></img>
              <div className="border-t border-amber-300 w-[40rem] mt-3 "></div>
            </div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] ">
              <div className=" px-[23rem] text-justify py-4 text-wrap text-white">
                <p>
                  Nuestros escenarios deportivos, resultan ideales para
                  practicar actividades deportivas como{" "}
                  <strong>Fútbol, Tenis y Golf</strong>, que son los de mayor
                  número de seguidores en el Club.
                  <br /> Contamos con un total de 8 canchas de tenis donde se
                  juega este deporte en tierra batida, y 4 campos de Fútbol que
                  no tienen nada que envidiarle a los mejores del país, pues su
                  grama siempre se encuentra en óptimas condiciones.
                  <br />
                  <br /> Nuestro campo de golf, además de ser el único y el
                  mejor del sur de Colombia, se encuentra al nivel de los
                  mejores del país, permitiendo que quienes disfrutan de este
                  deporte puedan pasar estupendas jornadas. <br /> Con más de 30
                  hectáreas de césped cien por ciento natural y 18 Hoyos de
                  juego, este campo de Golf que está reglamentado por la
                  Federación Nacional de Golf, ha servido como escenario de
                  eventos deportivos de talla Nacional.
                </p>
              </div>
              <div className=" flex justify-center items-center py-16">
                <div className=" w-[60%] ">
                  <PhotoAlbum layout="masonry" photos={photos} />
                </div>
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 2 && (
          <div>
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
                  nuestros mayores atractivos si de pasarla a gusto en familia
                  se trata. Con un total de tres piscinas, las cuales gozan de
                  total seguridad y normas de higiene, el Club Campestre de
                  Neiva, complace día a día a sus visitantes con una excelente
                  opción para refrescarse.
                  <br /> En nuestro Club, además de piscinas especiales para
                  todas las edades, también hay un divertido tobogán, que hace
                  de las visitas al Club un paseo inolvidable
                </p>
              </div>

              <div className=" flex justify-center items-center">
                <ImageGallery
                  items={imagesPiscinas}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay={true}
                  slideDuration={1000}
                />
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 3 && (
          <div className=" flex justify-center items-center pt-10 flex-col">
            <img
              src="https://i.ibb.co/QpTzKrr/escuelas-Deportivas.png"
              alt="escuelas-Deportivas"
              border="0"
            ></img>
            <div className="border-t border-amber-300 w-[40rem] mt-3 "></div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] ">
              <div className=" px-[16rem] text-justify  py-4 text-wrap text-white">
                <p>
                  ¡Descubre un mundo de oportunidades deportivas en el{" "}
                  <strong>Club Campestre de Neiva!</strong> <br />
                  <br /> Nuestro club ofrece una amplia gama de escuelas
                  deportivas para satisfacer todas las pasiones atléticas de los
                  hijos de nuestros socios desde los 3 hasta los 14 años y de
                  adultos quienes también se benefician de unas horas de
                  entrenamiento en compañía de profesores expertos en cada
                  deporte. Desde el emocionante mundo del fútbol hasta la
                  precisión del tenis, el encanto del golf y la frescura de la
                  natación, tenemos algo para todos. <br />
                  <br />
                  De martes a domingo, tendrás la oportunidad de sumergirte en
                  las aguas refrescantes de nuestras piscinas perfeccionando tus
                  habilidades de natación, o sintiendo la adrenalina en nuestras
                  canchas de fútbol mientras te conviertes en un verdadero
                  campeón dentro del campo.
                  <br />
                  <br /> Para aquellos que buscan el equilibrio y la
                  concentración, nuestras clases de tenis ofrecen la oportunidad
                  de mejorar tu juego bajo la guía de instructores expertos. Y
                  si buscas desafíos más intensos, ¡nuestro programa de
                  taekwondo te llevará a nuevas alturas de disciplina y destreza
                  física!
                  <br />
                  <br /> Así mismo, para aquellos que prefieren deslizarse sobre
                  ruedas, el patinaje es una opción emocionante que ofrecemos. Y
                  para los amantes del baloncesto y el vóley playa, contamos con
                  instalaciones de primer nivel donde puedes disfrutar de estos
                  deportes en un ambiente divertido y estimulante.
                  <br />
                  <br /> En el <strong>Club Campestre de Neiva</strong>, estamos
                  comprometidos con brindarte las mejores oportunidades
                  deportivas para que puedas alcanzar tus metas y disfrutar al
                  máximo de tu pasión por el deporte.{" "}
                  <strong>
                    ¡Únete a nosotros y haz de cada día una nueva aventura en el
                    mundo del deporte!
                  </strong>
                </p>
              </div>
              <div className=" grid grid-cols-2 px-[16rem] py-10">
                <div className=" flex justify-center items-center">
                  <button
                    onClick={() => {
                      setAtencionSocio(false);
                      setVerHorarios(true);
                    }}
                    className=" bg-amber-400 px-3 py-2 rounded-lg font-AltoneBold shadow-md shadow-gray-950 hover:bg-amber-600 hover:shadow transition-all ease-in-out"
                  >
                    Ver Horarios
                  </button>
                </div>
                <div className=" flex justify-center items-center">
                  <button
                    onClick={() => {
                      setAtencionSocio(true);
                      setVerHorarios(false);
                    }}
                    className=" bg-amber-400 px-3 py-2 rounded-lg font-AltoneBold shadow-md shadow-gray-950 hover:bg-amber-600 hover:shadow transition-all ease-in-out"
                  >
                    Atención a Socios
                  </button>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                {atencionSocio && (
                  <img
                    src="https://i.ibb.co/SwKNGD8/Whats-App-Image-2024-02-27-at-11-53-24-AM.jpg"
                    alt="Whats-App-Image-2024-02-27-at-11-53-24-AM"
                    border="0"
                    className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
                  />
                )}
                {verHorarios && (
                  <div className=" flex flex-row gap-4">
                    <img
                      src="https://i.ibb.co/1qrw2YX/Whats-App-Image-2024-02-27-at-11-53-16-AM.jpg"
                      alt="Whats-App-Image-2024-02-27-at-11-53-24-AM"
                      border="0"
                      className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
                    />
                    <img
                      src="https://i.ibb.co/jLP5SBn/Whats-App-Image-2024-02-27-at-11-53-21-AM.jpg"
                      alt="Whats-App-Image-2024-02-27-at-11-53-24-AM"
                      border="0"
                      className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap flex-col  px-[16rem] justify-start items-center">
                <h1 className="text-white font-AltoneBold text-4xl pb-3 pt-10">
                  Nuestros Deportes
                </h1>
                <div className="border-t border-amber-300 w-[40rem] mt-3 "></div>
                <div className=" flex flex-col ">
                  {deportes.map((deporte) => (
                    <div className=" pt-7">
                      <div>
                        {
                          <h3 className=" text-white font-AltoneBold text-2xl pb-3">
                            {deporte.titulo}
                          </h3>
                        }
                      </div>
                      <RViewer imageUrls={deporte.imagenes}>
                        <div className=" flex flex-row gap-4">
                          {deporte.imagenes.map((imagen, indexa) => (
                            <RViewerTrigger index={indexa}>
                              <img
                                src={imagen}
                                alt={imagen}
                                className="w-full h-64 object-cover mb-2 shadow-md"
                              />
                            </RViewerTrigger>
                          ))}
                        </div>
                      </RViewer>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 5 && (
          <div>
            <div className=" flex justify-center items-center pt-10 flex-col">
              <img
                src="https://i.ibb.co/SPTQbfj/restaurante-Internacional.png"
                alt="restaurante-Internacional"
                border="0"
              ></img>
              <div className="border-t border-amber-300 w-[40rem] mt-3 "></div>
            </div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] ">
              <div className=" px-[23rem] text-justify py-4 text-wrap text-white">
                <p>
                  Quienes quieren degustar de la buena mesa, saben que en el
                  Club Campestre de Neiva está una de las mejores opciones si de
                  restaurantes se trata. Además de una exquisita y variada
                  oferta de entradas, platos fuertes, postres y bebidas, las
                  locaciones de sus comedores son muy agradables para todos los
                  gustos. La cocina del Club Campestre de Neiva, es liderada por
                  un reconocido y destacado Chef quien día a día sorprende a sus
                  comensales con deliciosas recetas nacionales e internacionales
                </p>
              </div>

              <div className=" flex justify-center items-center py-16">
                <div className=" w-[60%] ">
                  <PhotoAlbum layout="masonry" photos={photos} />
                </div>
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 6 && (
          <div className=" flex justify-center items-center pt-10 flex-col">
            <img
              src="https://i.ibb.co/njtPPzM/sede-Infantil.png"
              alt="sede-Infantil"
              border="0"
            ></img>
            <div className="border-t border-amber-300 w-[40rem] mt-3 "></div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] ">
              <div className=" px-[23rem] text-justify py-4 text-wrap text-white">
                <p>
                  Gracias a este servicio, en el cual la prioridad son los más
                  pequeños de la casa, tenemos diferentes locaciones y
                  actividades para que los niños se diviertan y adquieran nuevos
                  conocimientos de manera segura y muy entretenida.
                </p>
              </div>

              <div className=" flex justify-center items-center">
                <ImageGallery
                  items={imagesGuarderia}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay={true}
                  slideDuration={1000}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
