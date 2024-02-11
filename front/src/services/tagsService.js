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
  async getTags() {
    try {
      response = await axios.get(`${API.node}campestre-api/v1/tags`, configApi);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
