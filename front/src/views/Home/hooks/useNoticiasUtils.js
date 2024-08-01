import noticiasService from "../../../services/noticiasService";

export const useNoticiasUtils = () => {
  const obtenerNoticias = async () => {
    return await noticiasService.buscarNoticiasPersonalizado({
      registros: 6,
    });
  };

  return {
    obtenerNoticias,
  };
};
