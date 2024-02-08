import { useDispatch, useSelector } from "react-redux";
import { checking, onLogin, onLogout } from "../../store/Auth/Autenticacion";
import usuario from "../../services/usuario";

export const useAuthUtils = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const checkAuthToken = async () => {
    dispatch(checking());
    const token = localStorage.getItem("token");

    if (!token) {
      return dispatch(onLogout("No estas logeado"));
    }

    try {
      const usuarioLogin = await usuario.usuario();
      dispatch(
        onLogin({
          email: usuarioLogin.email,
          rol: usuarioLogin.rol_id,
        })
      );
    } catch (error) {
      dispatch(onLogout("Tiempo expirado"));
      localStorage.setItem("token", "");
    }
  };

  const cerrarSeccion = () => {
    localStorage.setItem("token", "");
    dispatch(onLogout("Cerró seccion"));
  };

  return {
    status,
    checkAuthToken,
    cerrarSeccion,
  };
};
