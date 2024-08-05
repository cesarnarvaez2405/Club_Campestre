import noticiasService from "../../../../../services/noticiasService";
import tagsService from "../../../../../services/tagsService";
import usuario from "../../../../../services/usuario";

export const useHistorialNoticias = () => {
  const obtenerNoticias = async () => {
    const noticias = await noticiasService.buscarTodos();
    return noticias;
  };

  const obtenerNoticiasMongo = async () => {
    const noticias = await noticiasService.buscarTodosMongo();
    for (const noticia of noticias) {
      noticia.usuarioCreacion = await usuario.usuario(
        noticia.usuarioCreacionId
      );
      noticia.usuarioModificacion = await usuario.usuario(
        noticia.usuarioModificacionId
      );

      const updatedTags = [];
      for (const tag of noticia.tags) {
        const tagValor = await tagsService.obtenerPorId(tag.value);
        updatedTags.push(tagValor); // Agregar el objeto del tag obtenido
      }
      noticia.tags = updatedTags;
    }
    return noticias;
  };

  const eliminarNoticia = async (item) => {
    await noticiasService.eliminar(item.rowId);
  };

  const eliminarNoticiaMongo = async (item) => {
    await noticiasService.eliminarMongo(item._id);
  };

  return {
    obtenerNoticias,
    eliminarNoticia,
    obtenerNoticiasMongo,
    eliminarNoticiaMongo,
  };
};
