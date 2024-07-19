import React, { useEffect, useState } from "react";
import { VideoYoutube } from "../../../components/videoYoutube";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const BannerInfoHotel = () => {
  const videoFondo = "https://clubcampestreneiva.site/secuencia.mp4";

  const [posicionInfo, setPosicionInfo] = useState(0);

  const videosFondo = [
    {
      src: "https://clubcampestreneiva.site/IMG/Hotel/Videos/Entrada.mp4",
      title: "Video la entrada Hotel Club Campestre",
    },
    {
      src: "https://clubcampestreneiva.site/IMG/Hotel/Videos/Titulo.mp4",
      title: "Video del Letrero titulo Hotel club campestre",
    },
    {
      src: "https://clubcampestreneiva.site/IMG/Hotel/Videos/Entrada_2.mp4",
      title: "Video la entrada Hotel Club Campestre",
    },
    {
      src: "https://clubcampestreneiva.site/IMG/Hotel/Videos/Recepcion.mp4",
      title: "Video de la Recepcion del Hotel Club Campestre",
    },
    {
      src: "https://clubcampestreneiva.site/IMG/Hotel/Videos/balcon.mp4",
      title: "Video del balcon del hotel club campestre",
    },
    {
      src: "https://clubcampestreneiva.site/IMG/Hotel/Videos/habitacion.mp4",
      title: "Video de la Habitacion del hotel club campestre",
    },
    {
      src: "https://clubcampestreneiva.site/IMG/Hotel/Videos/letreros.mp4",
      title: "Video de los letreros del hotel club campestre",
    },
  ];

  const handleClickButtonRight = () => {
    if (posicionInfo < videosFondo.length - 1) {
      setPosicionInfo(posicionInfo + 1);
    }

    if (posicionInfo == videosFondo.length - 1) {
      setPosicionInfo(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleClickButtonRight, 4500);
    return () => clearInterval(intervalId);
  }, [posicionInfo]);

  return (
    <>
      <div className=" w-full 2xl:h-[50rem] xl:h-[40rem] lg:h-[40rem]  z-10 flex top-0">
        <div className=" w-full h-full block z-20">
          <div className="relative w-full 2xl:h-[46rem] xl:h-[40rem] h-[40rem] overflow-hidden bg-black">
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={videosFondo[posicionInfo].title}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="absolute top-0 left-0 min-w-full min-h-full object-cover brightness-[0.7] bg-black"
                >
                  <source
                    src={videosFondo[posicionInfo].src}
                    type="video/mp4"
                  />
                </video>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
        <div className=" w-full 2xl:h-[25rem] lg:h-[20rem] absolute z-30 2xl:top-[23%] xl:top-[18%] lg:top-[25%] top-[45%] sm:max-md:top-[30%] animate__animated animate__fadeInDown ">
          <div className=" h-full w-full flex flex-col gap-3 justify-center items-center">
            <h1 className=" font-AltoneBold text-6xl text-white sm:max-md:text-2xl">
              Hotel Club Campestre
            </h1>
            <small className=" text-white font-AltoneNormal pb-6 sm:max-md:px-5">
              "Lujo y confort se encuentran aquí. ¡Reserva ahora y vive una
              experiencia inolvidable!"
            </small>
            <div>
              <a
                href="https://wa.me/3175021927?text=Quiero%20reserver%20en%20el%20Hotel%20Club%20Campestre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2 transition-all duration-150 ease-in-out border-2 rounded-md border-amber-300 text-amber-300 font-AltoneNormal hover:scale-110">
                  Reserva Aquí
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
