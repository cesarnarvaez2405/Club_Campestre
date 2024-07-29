import axios from "axios";
import API from "../api/apiNode";
import {
  alertErrorResponse,
  alertSuccessReponse,
} from "../utils/alertResponseHttpUtils";

const configApi = {
  headers: {
    Authorization: "",
  },
};

axios.interceptors.request.use((request) => {
  if (request.headers.Authorization == "") {
    request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return request;
});

/**
 * Modulo para realizar las peticiones http API
 * @module export - Functions
 */

export default {
  async guardarTerceroInteresado(tercero) {
    try {
      const response = await axios.post(
        `${API.node}campestre-api/v1/terceros-interesados`,
        tercero,
        configApi
      );
      alertSuccessReponse(response);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async crearSugerencia(tercero) {
    try {
      const response = await axios.post(
        `${API.node}campestre-api/v1/terceros-interesados/crear-sugerencia`,
        tercero,
        configApi
      );
      alertSuccessReponse(response);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },
};
