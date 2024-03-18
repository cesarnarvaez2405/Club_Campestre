import React, { useState } from "react";

export const TableUsuarios = ({ items, itemsPerPage }) => {
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
          <div
            key={index}
            className=" p-3 bg-amber-100 flex flex-col font-AltoneNormal"
          >
            <span>
              Nombre: <small>{item.nombre}</small>
            </span>
            <span>
              Email: <small>{item.email} </small>
            </span>
            <span>
              Rol: <small> {item.rol}</small>
            </span>
            <span>
              Estado:
              <small
                className={` bg-green-600 text-white ml-2 rounded-md px-2 py-1 ${
                  item.estaActivo == false && "bg-red-600"
                }`}
              >
                {item.estaActivo ? "True" : "False"}
              </small>
            </span>
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
