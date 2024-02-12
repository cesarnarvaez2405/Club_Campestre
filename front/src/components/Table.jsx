import React, { useState } from "react";

export const TableComponent = ({ headers, items, itemsPerPage, children }) => {
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

  return (
    <div>
      <table className="mb-10 min-w-[65rem]">
        <thead>
          <tr className="border-2">
            {headers.map((header, index) => (
              <th className="p-2 border text-md" key={index}>
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border-2">
          {currentItems.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {Object.entries(item).map(([key, value], colIndex) => (
                <td className="p-2 border" key={colIndex}>
                  {colIndex === headers.length - 1 && key === "Opciones" ? (
                    <>
                      {value}
                      {children}
                    </>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
