import noticiasService from "../../../../../services/noticiasService";

export const useHistorialNoticias = () => {
  const obtenerNoticias = async () => {
    const noticias = await noticiasService.buscarTodos();
    return noticias;
  };

  const eliminarNoticia = async (item) => {
    await noticiasService.eliminar(item.rowId);
  };

  return {
    obtenerNoticias,
    eliminarNoticia,
  };
};
