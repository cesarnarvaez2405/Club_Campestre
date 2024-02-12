import React, { useState } from "react";

export const TableComponent = ({ headers, items, itemsPerPage }) => {
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
      <table className=" mb-10 min-w-[65rem] ">
        <thead>
          <tr className=" border-2">
            {headers.map((header, index) => (
              <th className=" border p-2 text-md" key={index}>
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" border-2">
          {currentItems.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td className=" border p-2" key={index}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <span className=" pr-2">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className=" mr-4 bg-slate-200 px-2 py-1 rounded-md cursor-pointer"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          className="  mr-4 bg-slate-200 px-2 py-1 rounded-md cursor-pointer"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
