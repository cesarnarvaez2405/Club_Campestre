import React from "react";

export const ListaDeClubes = ({ convenios, ciudad }) => {
  // Convertir el nombre de la ciudad a minúsculas para hacer la comparación
  const ciudadBuscada = ciudad;

  if (convenios.hasOwnProperty(ciudadBuscada)) {
    const clubes = convenios[ciudadBuscada];

    return (
      <div className=" mt-20 w-[100rem] ">
        <h2 className="text-xl font-semibold mb-2 uppercase text-blue-950">
          {ciudad}
        </h2>
        <div className=" grid grid-cols-3 gap-10">
          {clubes.map((club, idx) => (
            <div className=" px-6 border border-gray-300 rounded-lg py-3">
              <img
                src={club.imagen}
                alt={club.nombre}
                className="w-full h-32 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold pb-2">{club.nombre}</h3>
              <p>
                <span className=" font-light">Direccion: </span>
                {club.direccion}
              </p>
              <p>
                <span className=" font-light">Teléfono:</span> {club.telefonos}
              </p>
              <p>
                <span className=" font-light">Celular:</span> {club.celular}
              </p>
              <p>
                <span className=" font-light">Email:</span>{" "}
                <a
                  className=" underline decoration-amber-300"
                  href={`mailto:${club.email}`}
                >
                  {club.email}
                </a>
              </p>
              <p>
                <span className=" font-light">Fax:</span> {club.fax}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    // Retornar un mensaje indicando que no se encontraron clubes para la ciudad especificada
    return <p>No se encontraron clubes en {ciudad}.</p>;
  }
};
