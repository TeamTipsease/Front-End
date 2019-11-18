import axios from "axios";

//TODO: Implement base url of backend and add Authorization header.
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "",
    headers: {}
  });
};
