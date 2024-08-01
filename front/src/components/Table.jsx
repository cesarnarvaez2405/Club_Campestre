import React, { useEffect, useState } from "react";

export const TableComponent = ({
  items,
  itemsPerPage,
  onEdit,
  onDelete,
  onUpdate,
}) => {
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
    <div>
      <div className="grid grid-cols-3 gap-4 mb-10">
        {itemsToDisplay.map((item, index) => (
          <div key={index} className="border p-4">
            <h3 className=" font-semibold text-base">{item.titulo}</h3>
            <div className=" mt-3 text-sm">
              <span>{item.sumario}</span>
            </div>
            <div className=" mt-2 flex gap-3">
              {item.tags.map((tag, index) => (
                <div key={index} className=" my-4">
                  <span
                    key={index}
                    className=" text-sm bg-slate-200 px-2 py-1 rounded-md"
                  >
                    {tag.nombre}
                  </span>
                </div>
              ))}
            </div>
            <div className=" grid grid-rows-2 justify-start text-sm">
              <div className=" flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>

                <p className=" flex justify-end">
                  {item.usuarioCreacion.nombre}
                </p>
              </div>
              <div className=" flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <p>{item.fechaCreacion}</p>
              </div>
            </div>

            <div className=" pt-4">
              <button
                onClick={() => onEdit(item)}
                className=" bg-yellow-600 px-2 mx-2 rounded-md text-white font-AltoneNormal hover:bg-yellow-900 duration-150 ease-in-out"
              >
                <span className=" flex justify-center items-center">
                  editar
                </span>
              </button>
              <button
                className=" bg-red-600 px-2 mx-2 rounded-md text-white font-AltoneNormal hover:bg-red-900 duration-150 ease-in-out"
                onClick={() => onDelete(item)}
              >
                Eliminar
              </button>
              <button
                className={`bg-green-600 px-2 mx-2 rounded-md text-white font-AltoneNormal hover:bg-red-900 duration-150 ease-in-out
                  ${!item.estaActivo && "bg-slate-800"}
                  `}
                onClick={() => onUpdate(item)}
              >
                {item.estaActivo ? "Activo" : "Inactivo"}
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
    </div>
  );
};
