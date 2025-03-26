import axios from "axios";
import companiesAPI from "./companies.api";

const baseURL = import.meta.env.VITE_API_SERVER_BASE_URL;

export const apiClient = axios.create({ baseURL });

const API = {
  companies: companiesAPI,
};

export default API;
