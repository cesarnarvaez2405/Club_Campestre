import noticiasService from "../../../services/noticiasService";
import tagsService from "../../../services/tagsService";
import usuario from "../../../services/usuario";

export const useNoticias = () => {
  const obtenerNoticia = async (noticiaId) => {
    return await noticiasService.getNoticia(noticiaId);
  };

  const obtenerNoticiaMongo = async (noticiaId) => {
    const noticia = await noticiasService.buscarPorIdMongo(noticiaId);

    noticia.usuarioCreacion = await usuario.usuario(noticia.usuarioCreacionId);
    noticia.usuarioModificacion = await usuario.usuario(
      noticia.usuarioModificacionId
    );

    const updatedTags = [];
    for (const tag of noticia.tags) {
      const tagValor = await tagsService.obtenerPorId(tag.value);
      updatedTags.push(tagValor); // Agregar el objeto del tag obtenido
    }
    noticia.tags = updatedTags;

    return noticia;
  };

  return {
    obtenerNoticia,
    obtenerNoticiaMongo,
  };
};
