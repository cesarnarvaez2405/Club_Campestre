import React from "react";

export const Habitaciones = () => {
  const habitaciones = [
    {
      nombre: "Tatacoa",
      imagen: "https://i.ibb.co/tcsJ1Rz/IMG-8429-HDR-1.jpg",
    },
    {
      nombre: "San Agustin",
      imagen: "https://i.ibb.co/xXJpBM5/HAY-7467.jpg",
    },
    {
      nombre: "Yuma",
      imagen: "https://i.ibb.co/PjjH777/HAY-7445.jpg",
    },
    {
      nombre: "Bordones",
      imagen: "https://i.ibb.co/ZzfWqrP/HAY-7464.jpg",
    },
    {
      nombre: "Guacharos",
      imagen: "https://i.ibb.co/ZzfWqrP/HAY-7464.jpg",
    },
    {
      nombre: "Oasis",
      imagen: "https://i.ibb.co/HHdVGjM/HAY-7457.jpg",
    },
    {
      nombre: "San Pedro",
      imagen: "https://i.ibb.co/j5St6ZB/HAY-7442.jpg",
    },
    {
      nombre: "Cedral",
      imagen: "https://i.ibb.co/BwjNjwc/HAY-7450.jpg",
    },
    {
      nombre: "Guadalupe",
      imagen: "https://i.ibb.co/PjjH777/HAY-7445.jpg",
    },
    {
      nombre: "Guatipan",
      imagen: "https://i.ibb.co/k4qRBXY/HAY-7454.jpg",
    },
  ];

  return (
    <>
      <div className=" w-full flex flex-col gap-4 justify-center items-center py-10">
        <h2 className=" text-xl font-thin italic">Nuestras Cabañas</h2>
        <h2 className=" font-semibold text-xl">Deluxe con 2 Camas grandes</h2>
        <div className="border-t border-amber-300 w-[20rem] mt-3 "></div>
        <div className=" w-[50rem] py-7 text-justify font-thin ">
          <p>
            El hotel cuenta con 10 cómodas y confortables cabañas,las cuales han
            sido decoradas con bellos paisajes y sitios turísticos de nuestro
            departamento, transportando a nuestros huesped al maravilloso mundo
            Huilense, disfrutando de una vista natural y un agradable ambiente,
            en un encuentro único con la naturaleza.
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-24 py-8">
          {habitaciones.map((habitacion, index) => (
            <div className="relative" key={index}>
              <img
                src={habitacion.imagen}
                alt={habitacion.nombre}
                border="0"
                className="w-[29rem] object-contain"
              />
              <div className="absolute  h-12 w-36 top-2/3 -right-16 border border-black bg-white rounded-md ">
                <div className=" h-full flex justify-center items-center font-light italic">
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
