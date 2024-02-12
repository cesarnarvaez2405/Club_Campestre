import noticiasService from "../../../services/noticiasService";

export const useNoticiasUtils = () => {
  const obtenerNoticias = async () => {
    const noticias = await noticiasService.buscarNoticiasPersonalizado({
      registros: 3,
    });
    return noticias;
  };

  return {
    obtenerNoticias,
  };
};
