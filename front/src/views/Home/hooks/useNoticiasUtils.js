import noticiasService from "../../../services/noticiasService";
import usuario from "../../../services/usuario";

export const useNoticiasUtils = () => {
  const obtenerNoticias = async () => {
    return await noticiasService.buscarNoticiasPersonalizado({
      registros: 6,
    });
  };

  const obtenerNoticiasLimiteMongo = async () => {
    const noticias = await noticiasService.buscarNoticiasPersonalizadoMongo({
      limite: 6,
    });

    for (const noticia of noticias) {
      noticia.usuarioCreacion = await usuario.obtenerUsuarioPublico(
        noticia.usuarioCreacionId
      );
      noticia.usuarioModificacion = await usuario.obtenerUsuarioPublico(
        noticia.usuarioModificacionId
      );
    }
    return noticias;
  };

  return {
    obtenerNoticias,
    obtenerNoticiasLimiteMongo,
  };
};
