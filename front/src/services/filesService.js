import axios from "axios";
import API from "../api/apiNode";
import {
  alertSuccessReponse,
  alertErrorResponse,
} from "../utils/alertResponseHttpUtils";

const configApi = {
  headers: {
    Authorization: "",
    "Content-Type": "multipart/form-data",
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
  async updateFile(body) {
    try {
      response = await axios.post(
        `${API.node}campestre-api/v1/file/upload-image`,
        body,
        configApi
      );
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },
};
