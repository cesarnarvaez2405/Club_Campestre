import axios from "axios";
import API from "../api/apiNode";

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

let response = [];

/**
 * Modulo para realizar las peticiones http API
 * @module export - Functions
 */

export default {
  async addNoticia(body) {
    try {
      response = await axios.post(
        `${API.node}campestre-api/v1/noticias`,
        body,
        configApi
      );
      console.log("excelente");
    } catch (error) {
      console.error(error);
    }
  },

  async buscarNoticiasPersonalizado(parametros) {
    try {
      const url = `${API.node}campestre-api/v1/noticias/buscar-personalizado`;

      if (parametros) {
        const queryString = new URLSearchParams(parametros).toString();
        const fullUrl = url + "?" + queryString;
        response = await axios.get(fullUrl, configApi);
      } else {
        response = await axios.get(
          `${API.node}campestre-api/v1/noticias/buscar-personalizado`,
          configApi
        );
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
