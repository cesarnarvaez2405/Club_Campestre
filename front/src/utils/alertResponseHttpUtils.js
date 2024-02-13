import Swal from "sweetalert2";

/**
 * Imprime una alerta para response HTTP exitosos (2**). Estas responses
 * no traen el objeto de data, como si lo hacen los errors.
 * @param {*} response
 * @returns Swal.fire
 */

export function alertSuccessReponse(response) {
  const message = response?.data?.message ?? null;

  if (response?.status) {
    return alertResponse({
      statusCode: response.status,
      message,
      error: null,
    });
  }
}

/**
 * Imprime una alerta para los response de errores HTTP (4** y 5**).
 * Estos responses traen toda la información en la propiedad response.data.
 * @param {*} response
 * @returns Swal.fire
 */
export function alertErrorResponse(response) {
  if (!response?.statusCode) {
    response.statusCode = 500;
  }
  return alertResponse(response);
}

function alertResponse(response) {
  const {
    statusCode,
    response: {
      data: { message },
    },
    error,
  } = response;
  let title = "¡Error!";
  let color = "error";
  let icon = COLORS.error;

  const msg = message || MESSAGES_HTTP[statusCode] || error;

  if (statusCode >= 200 && statusCode < 300) {
    title = "¡Éxito!";
    icon = "success";
    color = COLORS.success;
  } else if (statusCode >= 400 && statusCode < 500) {
    title = "¡Error de solicitud!";
    icon = "warning";
    color = COLORS.warning;
  } else if (statusCode >= 500) {
    title = "¡Error!";
    icon = "error";
    color = COLORS.error;
  }
  return printAlert({ icon, title, msg, color });
}

function printAlert({ icon, title, msg, color }) {
  return Swal.fire({
    icon,
    title,
    html: msg,
    confirmButtonColor: color,
    iconColor: color,
  });
}

const COLORS = {
  error: "#cf3832",
  success: "#44af87",
  warning: "#f2bd06",
};

const MESSAGES_HTTP = {
  200: "OK",
  201: "Creado correctamente",
  204: "Actualizado correctamente",
  400: "Solicitud incorrecta",
  401: "No autorizado",
  403: "Prohibido",
  404: "Registro no encontrado",
  409: "Conflicto",
  500: "Error interno del servidor",
};
