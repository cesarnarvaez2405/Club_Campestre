import filesService from "../../services/filesService";

export const useDocsUtils = () => {
  const enviarImagen = async (imagen) => {
    const archivo = new FormData();
    archivo.append("file", imagen);
    return await filesService.updateFile(archivo);
  };

  return { enviarImagen };
};
