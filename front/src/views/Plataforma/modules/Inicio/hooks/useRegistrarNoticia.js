import tagsService from "../../../../../services/tagsService";
import { useDocsUtils } from "../../../../../hooks/Utils/useDocsUtils";
import noticiasService from "../../../../../services/noticiasService";

export const useRegistrarNoticia = () => {
  const { enviarImagen } = useDocsUtils();
  const obtenerTags = async () => {
    const tags = await tagsService.getTags();
    return tags;
  };

  const subirImagenesCuerpo = async (image) => {
    console.log(image);
    return await "../../uploads/hola.png";
  };

  const guardar = async (noticia) => {
    const { titulo, cuerpo, portada, tags } = noticia;
    const file = portada[0];
    if (file && file.size > 3145728) {
      return "El tamaño del archivo excede el límite de 3MB";
    }
    const imagen = await enviarImagen(portada[0]);
    const { filename } = imagen;
    const tagsIds = tags.map((tag) => tag.value);
    const noticiaACrear = {
      titulo,
      cuerpo,
      portada: filename,
      usuarioCreacionId: 1,
      usuarioModificacionId: 1,
      tagsIds,
    };
    await noticiasService.addNoticia(noticiaACrear);
  };

  return {
    obtenerTags,
    subirImagenesCuerpo,
    guardar,
  };
};
