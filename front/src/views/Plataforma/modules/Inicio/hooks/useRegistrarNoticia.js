import tagsService from "../../../../../services/tagsService";

export const useRegistrarNoticia = () => {
  const obtenerTags = async () => {
    const tags = await tagsService.getTags();
    return tags;
  };

  return {
    obtenerTags,
  };
};
