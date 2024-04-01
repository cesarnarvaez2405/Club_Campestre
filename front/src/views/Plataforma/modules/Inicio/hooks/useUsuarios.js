import usuarioService from "../../../../../services/usuario";

export const useUsuarios = () => {
  const obtenerUsuarios = async () => {
    return await usuarioService.getUsuarios();
  };

  const registrarUsuario = async (usuario) => {
    delete usuario.secondPassword;
    return await usuarioService.addUsuario({
      ...usuario,
      estaActivo: true,
      rol: "user",
    });
  };

  const eliminarUsuario = async (usuarioId) => {
    await usuarioService.deleteUsuario(usuarioId);
  };

  return {
    obtenerUsuarios,
    registrarUsuario,
    eliminarUsuario,
  };
};
