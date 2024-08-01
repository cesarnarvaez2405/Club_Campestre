import React, { useState } from "react";
import { TableComponent } from "../../../../../components/Table";
import { useHistorialNoticias } from "../hooks/useHistorialNoticias";
import Swal from "sweetalert2";
import { useRegistrarNoticia } from "../hooks/useRegistrarNoticia";

export const HistorialNoticias = ({ noticias, obtenerNoticias, editar }) => {
  const { eliminarNoticia } = useHistorialNoticias();
  const { actualizar } = useRegistrarNoticia();

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
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminarNoticia(item);
        await obtenerNoticias();
      }
    });
  };

  const handleUpdate = async (item) => {
    const mensaje = item.estaActivo ? `Inactivar` : "Activar";
    Swal.fire({
      title: `¡Advertencia!`,
      text: `Estas seguro de ${mensaje} esta Noticia?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#06B357",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await actualizar(
          {
            estaActivo: !item.estaActivo,
          },
          item.rowId
        );
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
            itemsPerPage={12}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          >
            <button>Editar</button>
          </TableComponent>
        </div>
      </div>
    </>
  );
};
