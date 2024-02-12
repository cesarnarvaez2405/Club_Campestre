import React, { useState } from "react";
import { TableComponent } from "../../../../../components/Table";

export const HistorialNoticias = ({ noticias }) => {
  const [headers, setHeaders] = useState([
    { text: "Id" },
    { text: "Fecha creacion" },
    { text: "Fecha modificacion" },
    { text: "Titulo" },
  ]);

  return (
    <>
      <div className=" h-full flex flex-col gap-10 justify-start items-start 2xl:px-56 px-20 py-5 bg-white ">
        <h2 className=" text-2xl font-semibold pt-3">Historial de Noticias</h2>
        <div className="flex flex-row gap-5">
          <TableComponent items={noticias} headers={headers} itemsPerPage={5} />
        </div>
      </div>
    </>
  );
};
