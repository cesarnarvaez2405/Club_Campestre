import tagsService from "../../../../../services/tagsService";
import { useDocsUtils } from "../../../../../hooks/Utils/useDocsUtils";
import { useAuthUtils } from "../../../../../hooks/Utils/useAuthUtils";
import noticiasService from "../../../../../services/noticiasService";

export const useRegistrarNoticia = () => {
  const { subirImagenImgbb, enviarImagen } = useDocsUtils();
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
    const imagen = await enviarImagen(portada[0]);

    const tagsIds = tags.map((tag) => tag.value);
    const noticiaACrear = {
      titulo,
      cuerpo: "<p></p>",
      sumario,
      portada: `https://clubcampestreneiva.site/${imagen}`,
      usuarioCreacionId: user.rowId,
      usuarioModificacionId: user.rowId,
      tagsIds,
    };
    const noticiaCreada = await noticiasService.addNoticia(noticiaACrear);

    console.log(noticiaCreada);

    const noticiaAActualizar = {
      cuerpo: noticia.cuerpo,
    };

    console.log(noticia.cuerpo);

    // Actualizamos para ingresar el cuerpo
    await noticiasService.actualizar(noticiaCreada.rowId, noticiaAActualizar);
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
      const imagenSubida = await enviarImagen(imagen);
      imagenesGuardadas.push(`https://clubcampestreneiva.site/${imagenSubida}`);
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
