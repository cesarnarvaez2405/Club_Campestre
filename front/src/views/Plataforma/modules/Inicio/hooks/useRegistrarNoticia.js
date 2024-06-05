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

  const crearTags = async (datos) => {
    await tagsService.crearTag(datos);
  };

  const subirImagenesCuerpo = async (image) => {
    return await "../../uploads/hola.png";
  };

  const guardar = async (noticia) => {
    const { titulo, cuerpo, portada, sumario, tags } = noticia;
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
      sumario,
      portada: display_url,
      usuarioCreacionId: user.rowId,
      usuarioModificacionId: user.rowId,
      tagsIds,
    };
    await noticiasService.addNoticia(noticiaACrear);
  };

  const actualizar = async (noticiaAEditar, noticiaId) => {
    const tagsIds = noticiaAEditar.tags.map((tag) => tag.value);
    noticiaAEditar.tagsIds = tagsIds;

    delete noticiaAEditar.tags;

    if (noticiaAEditar.portada) {
      const file = noticiaAEditar.portada[0];
      if (file && file.size > 3145728) {
        return "El tamaño del archivo excede el límite de 3MB";
      }
      const imagen = await subirImagenImgbb(file);
      noticiaAEditar.portada = imagen.data.display_url;
    }
    await noticiasService.actualizar(noticiaId, noticiaAEditar);
  };

  const guardarImagenesRegistro = async (imagenes) => {
    const imagenesGuardadas = [];
    for (const imagen of imagenes) {
      if (imagen && imagen.size > 3145728) {
        Swal.fire({
          title: "El tamaño del archivo excede el límite de 3MB",
          text: "La imagen tiene que ser menos a 3mb",
          icon: "error",
        });
      }
      const imagenSubida = await subirImagenImgbb(imagen);
      imagenesGuardadas.push(imagenSubida.data.display_url);
    }

    return imagenesGuardadas;
  };

  return {
    obtenerTags,
    subirImagenesCuerpo,
    guardar,
    guardarImagenesRegistro,
    actualizar,
    crearTags,
  };
};
