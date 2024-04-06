import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const NoticiaDetalle = () => {
  const { id } = useParams();

  return (
    <>
      <div>
        <p>Noticia detalle {id} </p>
      </div>
    </>
  );
};
