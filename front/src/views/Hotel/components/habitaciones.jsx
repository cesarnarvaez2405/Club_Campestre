import React from "react";

export const Habitaciones = () => {
  const habitaciones = [
    {
      nombre: "Tatacoa",
      imagen: "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(3).jpg",
    },
    {
      nombre: "San Agustin",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(5).jpg",
    },
    {
      nombre: "Yuma",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(7).jpg",
    },
    {
      nombre: "Bordones",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(4).jpg",
    },
    {
      nombre: "Guacharos",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(4).jpg",
    },
    {
      nombre: "Oasis",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(3).jpg",
    },
    {
      nombre: "San Pedro",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(6).jpg",
    },
    {
      nombre: "Cedral",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(1).jpg",
    },
    {
      nombre: "Guadalupe",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(7).jpg",
    },
    {
      nombre: "Guatipan",
      imagen:
        "https://clubcampestreneiva.site/IMG/Hotel/Habitaciones/Hotel_club(2).jpg",
    },
  ];

  return (
    <>
      <div className=' w-full flex flex-col gap-4 justify-center items-center py-10'>
        <h2 className=' text-xl font-thin italic'>Nuestras Cabañas</h2>
        <h2 className=' font-semibold text-xl'>Deluxe con 2 Camas grandes</h2>
        <div className='border-t border-amber-300 w-[20rem] mt-3 '></div>
        <div className=' w-[50rem] py-7 text-justify font-thin sm:max-md:w-full sm:max-md:px-5 '>
          <p>
            El hotel cuenta con 10 cómodas y confortables cabañas, las cuales
            han sido decoradas con bellos paisajes y sitios turísticos de
            nuestro departamento, transportando a nuestros huesped al
            maravilloso mundo Huilense, disfrutando de una vista natural y un
            agradable ambiente, en un encuentro único con la naturaleza.
          </p>
        </div>
        <div className=' grid lg:grid-cols-2 grid-cols-3 gap-24 py-8 sm:max-md:grid-cols-1 sm:max-md:gap-10'>
          {habitaciones.map((habitacion, index) => (
            <div
              className='relative animate__animated animate__fadeIn'
              key={index}
            >
              <img
                src={habitacion.imagen}
                alt={habitacion.nombre}
                border='0'
                className='w-[29rem] object-contain sm:max-md:w-full sm:max-md:object-cover sm:max-md:h-full sm:max-md:rounded-md sm:max-md:px-5'
              />
              <div className='absolute h-12 w-36 top-2/3 -right-16 border border-black bg-white rounded-md sm:max-md:left-10 sm:max-md:w-24'>
                <div className=' h-full flex justify-center items-center font-light italic'>
                  <h3>{habitacion.nombre}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
