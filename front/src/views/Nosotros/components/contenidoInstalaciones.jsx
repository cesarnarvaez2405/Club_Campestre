import React, { useEffect, useState } from "react";
import {
  salones,
  menuServicios,
  deportes,
  escenariosDeportivos,
  imagesGuarderia,
  imagesCapilla,
  imagesPiscinas,
  imagesRestaurante,
  imagesGastro,
} from "../../../utils/data";
import ImageGallery from "react-image-gallery";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/instalaciones.css";

const videoFondo =
  "https://clubcampestreneiva.site/gastrobar_club_campestre.mp4";

export const ContenidoInstalaciones = () => {
  const [imagenesSalones, setImagenesSalones] = useState([]);
  const [imagenesRestaurante, setImagenesRestaurante] = useState([]);
  const [opcionServicio, setOpcionServicio] = useState(0);
  const [verHorarios, setVerHorarios] = useState(false);
  const [atencionSocio, setAtencionSocio] = useState(false);
  const [imagenesEscenarios, setImagenesEscenarios] = useState([]);
  const [isHovered, setIsHovered] = useState({
    isHover: false,
    indexHover: null,
  });

  useEffect(() => {
    const nuevasImagenesSalones = salones.map((salon) => salon.imagen);
    setImagenesSalones(nuevasImagenesSalones);

    const nuevasImagenesEscenarios = escenariosDeportivos.map(
      (escenario) => escenario.imagen
    );
    setImagenesEscenarios(nuevasImagenesEscenarios);

    const nuevasImagenesRestaurante = imagesRestaurante.map(
      (restaurante) => restaurante.imagen
    );

    setImagenesRestaurante(nuevasImagenesRestaurante);
  }, []);

  return (
    <>
      <div className=" w-full h-full bg-zinc-800  ">
        <div className=" w-full h-16 divide-x divide-amber-300 py-2 2xl:px-[10rem] lg:px-[2rem] grid grid-cols-8 justify-center items-center sm:max-md:grid-cols-3 sm:max-md:grid-row-3 sm:max-md:gap-3 sm:max-md:h-24 sm:max-md:px-2 sm:max-md:py-5 animate__animated animate__fadeIn  ">
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
          <div className="animate__animated animate__fadeIn">
            <div className=" flex justify-center items-center pt-10 flex-col sm:max-md:pt-16">
              <img
                src="https://i.ibb.co/dpgQ9TD/titulo-Evento-Sociales23png.png"
                alt="Logo-club"
                border="0"
                className=" "
              ></img>
              <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
            </div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] ">
              <div className=" px-[16rem] md:max-xl:px-[8em]  text-justify py-4 text-wrap text-white sm:max-md:px-1">
                <p>
                  Los <strong>Salones sociales </strong> de nuestro Club, gozan
                  de gran preferencia en toda la región,tenemos un total de ocho
                  salones, se pueden atender eventos de hasta 2.000 personas en
                  simultáneo, lo que sin duda es un gran honor. <br />
                  <br /> Para ello, contamos con gran variedad a la hora de la
                  decoración de nuestros sitios de recepción, los cuales hemos
                  bautizado con los nombres de Salón Principal, que posee a su
                  vez el salón Azul y Cincuentenario, el salón La Espantosa,
                  Guinness, Presidente y Salón de televisión y otros. <br />
                  <br />
                  En nuestros salones sociales, se puede disfrutar de mucha
                  elegancia, sobriedad o privacidad, dependiendo de las
                  necesidades de quien haya elegido al Club Campestre de Neiva,
                  para la realización de sus eventos y recepciones.
                </p>
              </div>
              <div className="flex flex-wrap justify-start px-[16rem] md:max-xl:px-[8rem] sm:max-md:px-0 ">
                <RViewer imageUrls={imagenesSalones}>
                  {salones.map((deporte, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/2 lg:w-1/2 p-4 cursor-pointer"
                    >
                      <div className="">
                        <RViewerTrigger index={index}>
                          <img
                            src={deporte.imagen}
                            alt={deporte.nombre}
                            className="w-full h-64 object-cover mb-2 shadow-md sm:max-md:h-36"
                          />
                        </RViewerTrigger>

                        <div className=" flex flex-col justify-center items-start">
                          <h2 className="text-2xl mb-2 font-thin text-white sm:max-md:text-xl">
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
          <div className="animate__animated animate__fadeIn">
            <div className=" flex justify-center items-center pt-10 flex-col">
              <img
                src="https://i.ibb.co/nbF8SSV/Sin-t-tulo-5.png"
                alt="Sin-t-tulo-5"
                border="0"
              ></img>
              <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
            </div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] pb-[5rem] sm:max-md:px-1 sm:max-md:py-1 sm:max-md:pb-20 ">
              <div className=" px-[23rem] text-justify py-4 text-wrap text-white sm:max-md:px-4">
                <p>
                  La <strong>Capilla de Club Campestre</strong> de Neiva, ofrece
                  a los feligreses la oportunidad de reafirmar su Fe y vivir los
                  eventos religiosos más importantes con enorme comodidad y
                  confort. Es una de las preferidas en la región para bodas,
                  bautizos y comuniones
                </p>
              </div>

              <div className=" flex justify-center items-center sm:max-md:w-[22rem] animate__animated animate__fadeIn">
                <ImageGallery
                  items={imagesCapilla}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay={true}
                  slideDuration={600}
                  slideInterval={5000}
                />
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 4 && (
          <div className="animate__animated animate__fadeIn">
            <div className=" flex justify-center items-center pt-10 flex-col">
              <img
                src="https://i.ibb.co/C0r5k5H/escenarios-Depor.png"
                alt="escenarios-Depor"
                border="0"
              ></img>
              <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
            </div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-1 ">
              <div className=" px-[23rem] text-justify py-4 text-wrap text-white sm:max-md:px-4">
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
              <div className=" flex justify-center items-center py-5">
                <div className=" w-[60%] sm:max-md:w-[80%] ">
                  <div className=" grid grid-cols-3 justify-center items-center py-[2rem] sm:max-md:grid-cols-1">
                    <RViewer imageUrls={imagenesEscenarios}>
                      {escenariosDeportivos.map((escenario, index) => (
                        <div className=" flex flex-col gap-5 pr-5 py-3">
                          <p className=" text-2xl mb-2 font-thin text-white">
                            {escenario.titulo}
                          </p>
                          {escenario.imagen && (
                            <RViewerTrigger index={index}>
                              <img
                                src={escenario.imagen}
                                alt={escenario.titulo}
                                className="w-full h-64 object-cover mb-2 shadow-md cursor-pointer"
                              />
                            </RViewerTrigger>
                          )}
                        </div>
                      ))}
                    </RViewer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 2 && (
          <div className="animate__animated animate__fadeIn">
            <div className=" flex justify-center items-center pt-10 flex-col">
              <img
                src="https://i.ibb.co/SRPShQM/piscinas-YTobogan.png"
                alt="piscinas-YTobogan"
                border="0"
              ></img>
              <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[20rem] "></div>
            </div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-1 ">
              <div className=" px-[23rem] text-justify py-4 text-wrap text-white sm:max-md:px-5">
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

              <div className="flex justify-center items-center sm:max-md:w-[22rem] animate__animated animate__fadeIn">
                <ImageGallery
                  items={imagesPiscinas}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay={true}
                  slideDuration={1000}
                  slideInterval={5000}
                />
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 3 && (
          <div className=" flex justify-center items-center sm:max-md:items-start pt-10 flex-col animate__animated animate__fadeIn ">
            <img
              src="https://i.ibb.co/QpTzKrr/escuelas-Deportivas.png"
              alt="escuelas-Deportivas"
              border="0"
            ></img>
            <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[10rem] "></div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-5">
              <div className=" px-[16rem] text-justify py-4 text-wrap text-white md:max-xl:px-[8rem] sm:max-md:px-1 ">
                <p>
                  ¡Descubre un mundo de oportunidades deportivas en el{" "}
                  <strong>Club Campestre de Neiva!</strong> <br />
                  <br /> Nuestro club ofrece una amplia gama de Escuelas
                  Deportivas para satisfacer todas las pasiones atléticas de los
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
                  si buscas desafíos más intensos,{" "}
                  <strong>
                    ¡nuestro programa de taekwondo te llevará a nuevas alturas
                    de disciplina y destreza física!
                  </strong>
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
              <div className=" grid grid-cols-2 px-[16rem]  py-10 sm:max-md:px-1 sm:max-md:grid-cols-1 sm:max-md:gap-5">
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
                    src="https://i.ibb.co/3NbbhH8/6-HORARIO-ATENCI-N-A-SOCIOS.jpg"
                    alt="Horario de atencion club campestre"
                    border="0"
                    className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
                  />
                )}
                {verHorarios && (
                  <div className=" flex flex-row gap-4 sm:max-md:grid sm:max-md:grid-rows-2">
                    <img
                      src="https://i.ibb.co/tQV4KfT/5-VER-HORARIO-DEPORTES.jpg"
                      alt="horario escuelas club campestre"
                      border="0"
                      className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
                    />
                    <img
                      src="https://i.ibb.co/J3xL9ZG/4-VER-HORARIO-DEPORTES.jpg"
                      alt="horario escuelas club campestre"
                      border="0"
                      className="w-[35rem] h-[40rem] bg-cover mb-2 shadow-md"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap flex-col px-[16rem] md:max-xl:px-[8rem] justify-start items-center sm:max-md:px-1">
                <h1 className="text-white font-AltoneBold text-4xl pb-3 pt-10">
                  Nuestros Deportes
                </h1>
                <div className="border-t border-amber-300 w-[40rem] mt-3  sm:max-md:w-[10rem] "></div>
                <div className=" flex flex-col ">
                  {deportes.map((deporte) => (
                    <div className=" pt-7">
                      <div>
                        {
                          <h3 className=" text-white font-AltoneBold text-4xl pb-3">
                            {deporte.titulo}
                          </h3>
                        }
                      </div>
                      <RViewer imageUrls={deporte.imagenes}>
                        <div className=" grid grid-cols-5 sm:max-md:grid-cols-2 md:max-xl:grid-cols-4 gap-3 pb-5">
                          {deporte.imagenes.map((imagen, indexa) => (
                            <RViewerTrigger index={indexa}>
                              <img
                                src={imagen}
                                alt={`Deporte ${deporte.titulo} club campestre`}
                                className="w-full h-64 object-cover  shadow-md cursor-pointer rounded-md border-2 border-white"
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
              <div className=" px-[23rem] text-justify py-4 text-wrap text-white sm:max-md:px-1">
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

              <div className="flex justify-center items-center py-10">
                <div className="w-[60%] sm:max-md:w-[90%] ">
                  <div className="grid grid-cols-3 gap-4 sm:max-md:grid-cols-1 ">
                    {imagesRestaurante.map((restaurante, index) => (
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
        )}

        {opcionServicio === 6 && (
          <div className=" flex justify-center items-center pt-10 flex-col animate__animated animate__fadeIn">
            <img
              src="https://i.ibb.co/njtPPzM/sede-Infantil.png"
              alt="sede-Infantil"
              border="0"
            ></img>
            <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[10rem] "></div>
            <div className=" 2xl:px-[8rem] px-[2rem] py-[2rem] sm:max-md:px-1 ">
              <div className=" px-[23rem] text-justify py-4 text-wrap text-white sm:max-md:px-5">
                <p>
                  Gracias a este servicio, en el cual la prioridad son los más
                  pequeños de la casa, tenemos diferentes locaciones y
                  actividades para que los niños se diviertan y adquieran nuevos
                  conocimientos de manera segura y muy entretenida.
                </p>
              </div>

              <div className=" flex justify-center items-center animate__animated animate__fadeIn">
                <ImageGallery
                  items={imagesGuarderia}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay={true}
                  slideDuration={1000}
                  slideInterval={5000}
                />
              </div>
            </div>
          </div>
        )}

        {opcionServicio === 7 && (
          <div className="animate__animated animate__fadeIn">
            <div className=" flex justify-center items-center pt-10 flex-col sm:max-md:pt-20 ">
              <img
                src="https://i.ibb.co/mtzkw4J/gastrobar.png"
                alt="gastrobar_club_campestre"
                border="0"
              ></img>
              <div className="border-t border-amber-300 w-[40rem] mt-3 sm:max-md:w-[10rem]  "></div>
            </div>
            <div className=" grid grid-cols-3 gap-4 sm:max-md:grid-cols-1 sm:max-md:grid-rows-2 ">
              <div className=" flex flex-col justify-start items-center pt-32 pl-32 sm:max-md:pt-1 sm:max-md:pl-1  sm:max-md:col-start-1  sm:max-md:row-start-2 ">
                <p className=" text-white font-AltoneBold text-2xl text-center pb-10 sm:max-md:pb-5">
                  Conozca nuestro nuevo Gastrobar
                </p>
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="max-w-screen-sm max-h-screen object-cover border-2 border-white rounded-md shadow-lg shadow-black animate__animated animate__fadeIn"
                >
                  <source src={videoFondo} type="video/mp4" />
                </video>
              </div>
              <div className=" px-32 py-20 flex flex-col justify-left items-center text-wrap text-white text-justify gap-8 col-start-2 col-span-2 sm:max-md:col-start-1  sm:max-md:row-start-1  sm:max-md:px-10  sm:max-md:pt-1">
                <p className=" pr-20 sm:max-md:pr-1">
                  El nuevo{" "}
                  <strong>gastrobar del Club Campestre de Neiva</strong> es un
                  vibrante espacio que combina la elegancia de un bar con la
                  delicia de la gastronomía. Ofrece una amplia variedad de
                  cócteles expertamente preparados, una amplia selección de
                  licores y exquisitas picadas para satisfacer todos los
                  paladares. Además, destaca por ser un lugar de entretenimiento
                  donde los clientes pueden disfrutar de las transmisiones de
                  algunos partidos y de divertidas sesiones de karaoke. Con una
                  atmósfera acogedora y un servicio de primera clase, el
                  gastrobar es el destino perfecto para disfrutar de una noche
                  inolvidable entre amigos y familiares.
                </p>
                <div className=" flex justify-center items-center px-20 sm:max-md:px-1 animate__animated animate__fadeIn">
                  <ImageGallery
                    items={imagesGastro}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    autoPlay={true}
                    slideDuration={900}
                    slideInterval={5000}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
