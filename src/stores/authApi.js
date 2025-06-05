import axios from "axios";

const BASE_URL =
  "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/";

const authApi = {};

authApi.register = async (input) => {
  return axios.post(`${BASE_URL}/api/V1/auth/register`, input);
};

authApi.login = async (input) => {
  return axios.post(`${BASE_URL}/api/V1/auth/login`, input);
};

export default authApi;
