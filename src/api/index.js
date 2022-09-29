import axios from "axios";

const BASE_URL = "http://localhost:3000";
const apiConfig = {
  baseURL: BASE_URL,
};

export const api = axios.create(apiConfig);
