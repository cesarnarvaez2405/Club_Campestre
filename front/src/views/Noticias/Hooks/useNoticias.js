import noticiasService from "../../../services/noticiasService";

export const useNoticias = () => {
  const obtenerNoticia = async (noticiaId) => {
    return await noticiasService.getNoticia(noticiaId);
  };

  return {
    obtenerNoticia,
  };
};
