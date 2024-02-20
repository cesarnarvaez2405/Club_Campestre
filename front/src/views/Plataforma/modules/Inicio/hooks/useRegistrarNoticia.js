import tagsService from "../../../../../services/tagsService";
import { useDocsUtils } from "../../../../../hooks/Utils/useDocsUtils";
import { useAuthUtils } from "../../../../../hooks/Utils/useAuthUtils";
import noticiasService from "../../../../../services/noticiasService";

export const useRegistrarNoticia = () => {
  const { subirImagenImgbb } = useDocsUtils();
  const { user } = useAuthUtils();

  const obtenerTags = async () => {
    const tags = await tagsService.getTags();
    return tags;
  };

  const subirImagenesCuerpo = async (image) => {
    return await "../../uploads/hola.png";
  };

  const guardar = async (noticia) => {
    const { titulo, cuerpo, portada, tags } = noticia;
    const file = portada[0];
    if (file && file.size > 3145728) {
      return "El tamaño del archivo excede el límite de 3MB";
    }
    const imagen = await subirImagenImgbb(portada[0]);

    const { display_url } = imagen.data;
    const tagsIds = tags.map((tag) => tag.value);
    const noticiaACrear = {
      titulo,
      cuerpo,
      portada: display_url,
      usuarioCreacionId: user.rowId,
      usuarioModificacionId: user.rowId,
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
