import usuarioService from "../../../../../services/usuario";

export const useUsuarios = () => {
  const obtenerUsuarios = async () => {
    const usuarios = await usuarioService.getUsuarios();
    return usuarios;
  };
  return {
    obtenerUsuarios,
  };
};
