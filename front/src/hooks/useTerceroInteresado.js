import terceroInteresadoService from "../services/terceroInteresadoService";

export const useTerceroInteresado = () => {
  const guardarTercero = async (tercero) => {
    tercero.telefono = parseInt(tercero.telefono);
    return await terceroInteresadoService.guardarTerceroInteresado(tercero);
  };

  return {
    guardarTercero,
  };
};
