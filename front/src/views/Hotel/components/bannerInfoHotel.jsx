import React from "react";
import { VideoYoutube } from "../../../components/videoYoutube";

export const BannerInfoHotel = () => {
  const videoFondo = "https://clubcampestreneiva.site/secuencia.mp4";
  return (
    <>
      <div className=' w-full 2xl:h-[50rem] xl:h-[40rem] lg:h-[40rem]  z-10 flex top-0'>
        <div className=' w-full h-full block z-20'>
          <div className='relative w-full 2xl:h-[46rem] xl:h-[40rem] h-[40rem] overflow-hidden'>
            {/* <VideoYoutube videoId="ddxdGn9dRxQ" width={1920} height={1080} /> */}
            <video
              autoPlay
              loop
              muted
              controls={false}
              className='absolute top-0 left-0 min-w-full min-h-full object-cover brightness-[0.7]'
            >
              <source src={videoFondo} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className=' w-full 2xl:h-[25rem] lg:h-[20rem] absolute z-30 2xl:top-[23%] xl:top-[18%] lg:top-[25%] top-[45%] sm:max-md:top-[30%] '>
          <div className=' h-full w-full flex flex-col gap-3 justify-center items-center'>
            <h1 className=' font-AltoneBold text-6xl text-white sm:max-md:text-2xl'>
              Hotel Club Campestre
            </h1>
            <small className=' text-white font-AltoneNormal pb-6 sm:max-md:px-5'>
              "Lujo y confort se encuentran aquí. ¡Reserva ahora y vive una
              experiencia inolvidable!"
            </small>
            <div>
              <a
                href='https://wa.me/3175021927?text=Quiero%20reserver%20en%20el%20Hotel%20Club%20Campestre'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='px-6 py-2 transition-all duration-150 ease-in-out border-2 rounded-md border-amber-300 text-amber-300 font-AltoneNormal hover:scale-110'>
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
