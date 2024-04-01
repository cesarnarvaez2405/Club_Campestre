import React, { useState } from "react";

export const TableUsuarios = ({ items, itemsPerPage, onDelete, onEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const itemsToDisplay = currentItems.slice(0, 10);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-10 mt-10">
        {itemsToDisplay.map((item, index) => (
          <div key={index} className=" p-3 bg-amber-100 flex flex-col rounded">
            <span className=" text-sm flex gap-2">
              <p className=" font-semibold">Nombre:</p> {item.nombre}
            </span>

            <span className=" text-sm flex gap-2">
              <p className=" font-semibold">Email:</p> {item.email}
            </span>

            <span className=" text-sm flex gap-2">
              <p className=" font-semibold">Rol: </p> {item.rol}
            </span>
            <span className="text-sm flex gap-2">
              <p className=" font-semibold">Estado: </p>
              <p
                className={`text-green-600 ml-2 rounded-mdfont-semibold ${
                  item.estaActivo == false && "text-red-600"
                }`}
              >
                {item.estaActivo ? "Activo" : "Inactivo"}
              </p>
            </span>
            <div className=" pt-2">
              <button
                onClick={() => onDelete(item)}
                className=" bg-red-600 px-2  rounded-md text-white  hover:bg-red-900 duration-150 ease-in-out"
              >
                Eliminar
              </button>
              <button
                onClick={() => onEdit(item)}
                className=" bg-yellow-600 px-2 mx-2 rounded-md text-white hover:bg-yellow-900 duration-150 ease-in-out"
              >
                <span className=" flex justify-center items-center">
                  Editar
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <span className="pr-2">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="px-2 py-1 mr-4 rounded-md cursor-pointer bg-slate-200"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          className="px-2 py-1 mr-4 rounded-md cursor-pointer bg-slate-200"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
