import axios from "axios";
import API from "../api/apiNode";
import {
  alertSuccessReponse,
  alertErrorResponse,
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
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async getNoticia(noticiaId) {
    try {
      response = await axios.get(
        `${API.node}campestre-api/v1/noticias/${noticiaId}`,
        configApi
      );
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
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
      alertErrorResponse(error);
    }
  },

  async buscarTodos() {
    try {
      response = await axios.get(
        `${API.node}campestre-api/v1/noticias`,
        configApi
      );
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async actualizar(rowId, body) {
    try {
      response = await axios.patch(
        `${API.node}campestre-api/v1/noticias/${rowId}`,
        body,
        configApi
      );
      alertSuccessReponse(response);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async eliminar(id) {
    try {
      response = await axios.delete(
        `${API.node}campestre-api/v1/noticias/${id}`,
        configApi
      );
      alertSuccessReponse(response);
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async addNoticiaMongo(body) {
    try {
      const response = await axios.post(`${API.noticiasApi}/noticias`, body);
      alertSuccessReponse(response);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async buscarTodosMongo() {
    try {
      const response = await axios.get(`${API.noticiasApi}/noticias`);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async actualizarMongo(_id, body) {
    try {
      const response = await axios.patch(
        `${API.noticiasApi}/noticias/${_id}`,
        body
      );
      alertSuccessReponse(response);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async buscarPorIdMongo(_id) {
    try {
      const response = await axios.get(`${API.noticiasApi}/noticias/${_id}`);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async eliminarMongo(_id) {
    try {
      const response = await axios.delete(`${API.noticiasApi}/noticias/${_id}`);
      alertSuccessReponse(response);
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async buscarNoticiasPersonalizadoMongo(parametros) {
    try {
      const url = `${API.noticiasApi}/noticias/buscar-limite`;

      if (parametros) {
        const queryString = new URLSearchParams(parametros).toString();
        const fullUrl = url + "?" + queryString;
        response = await axios.get(fullUrl, configApi);
      } else {
        response = await axios.get(
          `${API.node}noticias/buscar-limite`,
          configApi
        );
      }
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },
};
