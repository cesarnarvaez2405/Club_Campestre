import noticiasService from "../../../services/noticiasService";

export const useNoticiasUtils = () => {
  const obtenerNoticias = async () => {
    const noticias = await noticiasService.buscarNoticiasPersonalizado({
      registros: 3,
    });
    const noticiasFilter = noticias.filter(
      (noticia) => noticia.estaActivo != false
    );
    console.log(noticiasFilter);
    return noticiasFilter;
  };

  return {
    obtenerNoticias,
  };
};
