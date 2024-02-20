import filesService from "../../services/filesService";
import API from "../../api/apiNode";

export const useDocsUtils = () => {
  const enviarImagen = async (imagen) => {
    const archivo = new FormData();
    archivo.append("file", imagen);
    return await filesService.updateFile(archivo);
  };

  const subirImagenImgbb = async (imagen) => {
    const archivo = new FormData();
    archivo.append("image", imagen);
    archivo.append("key", API.apiImgbb);
    return await filesService.updateFileImgbb(archivo);
  };

  return { enviarImagen, subirImagenImgbb };
};
