import terceroInteresadoService from "../services/terceroInteresadoService";

export const useSugerencias = () => {
  const guardarSugerencia = async (tercero) => {
    tercero.telefono = parseInt(tercero.telefono);
    return await terceroInteresadoService.crearSugerencia(tercero);
  };

  return {
    guardarSugerencia,
  };
};
