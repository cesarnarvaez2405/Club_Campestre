import React, { useState } from "react";
import { TableComponent } from "../../../../../components/Table";
import { useHistorialNoticias } from "../hooks/useHistorialNoticias";
import Swal from "sweetalert2";

export const HistorialNoticias = ({ noticias, obtenerNoticias, editar }) => {
  const { eliminarNoticia } = useHistorialNoticias();
  const [headers, setHeaders] = useState([
    { text: "Id" },
    { text: "Fecha creacion" },
    { text: "Fecha modificacion" },
    { text: "Titulo" },
    { text: "Imagen" },
    { text: "opciones" },
  ]);

  const handleEdit = async (item) => {
    await editar(item);
  };

  const handleDelete = async (item) => {
    Swal.fire({
      title: `¡Advertencia!`,
      text: `Estas seguro de eliminar esta Noticia?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#06B357",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminarNoticia(item);
        await obtenerNoticias();
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start h-full gap-10 px-20 py-5 bg-white 2xl:px-56">
        <h2 className="pt-3 text-2xl font-semibold ">Historial de Noticias</h2>
        <div className="flex flex-row gap-5">
          <TableComponent
            items={noticias}
            headers={headers}
            itemsPerPage={12}
            onEdit={handleEdit}
            onDelete={handleDelete}
          >
            <button>Editar</button>
          </TableComponent>
        </div>
      </div>
    </>
  );
};
