import React, { useState } from "react";
import { TableComponent } from "../../../../../components/Table";

export const HistorialNoticias = ({ noticias }) => {
  const [headers, setHeaders] = useState([
    { text: "Id" },
    { text: "Fecha creacion" },
    { text: "Fecha modificacion" },
    { text: "Titulo" },
    { text: "Imagen" },
    { text: "Opciones" },
  ]);

  return (
    <>
      <div className="flex flex-col items-start justify-start h-full gap-10 px-20 py-5 bg-white 2xl:px-56">
        <h2 className="pt-3 text-2xl font-semibold ">Historial de Noticias</h2>
        <div className="flex flex-row gap-5">
          <TableComponent items={noticias} headers={headers} itemsPerPage={5}>
            <button>Editar</button>
          </TableComponent>
        </div>
      </div>
    </>
  );
};
