import noticiasService from "../../../../../services/noticiasService";

export const useHistorialNoticia = () => {
  const obtenerNoticias = async () => {
    const noticias = await noticiasService.buscarNoticiasPersonalizado();
    return noticias;
  };

  return {
    obtenerNoticias,
  };
};
