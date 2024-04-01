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
  async login(body) {
    try {
      const response = await axios.post(
        `${API.node}campestre-api/v1/auth/login`,
        body
      );
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async usuario() {
    try {
      const response = await axios.get(
        `${API.node}campestre-api/v1/auth/perfil`,
        configApi
      );
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async getUsuarios() {
    try {
      const response = await axios.get(
        `${API.node}campestre-api/v1/usuario`,
        configApi
      );
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async addUsuario(usuario) {
    try {
      const response = await axios.post(
        `${API.node}campestre-api/v1/auth/register`,
        usuario
      );
      alertSuccessReponse(response);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async deleteUsuario(usuarioId) {
    try {
      const response = await axios.delete(
        `${API.node}campestre-api/v1/usuario/${usuarioId}`,
        configApi
      );
      alertSuccessReponse(response);
    } catch (error) {
      alertErrorResponse(error);
    }
  },
};
