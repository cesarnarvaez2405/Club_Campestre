import axios from "axios";
import API from "../api/apiNode";
import { alertErrorResponse } from "../utils/alertResponseHttpUtils";

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
  async login(body) {
    try {
      response = await axios.post(
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
      response = await axios.get(
        `${API.node}campestre-api/v1/auth/perfil`,
        configApi
      );
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },
};
