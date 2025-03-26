import { apiClient } from "./index.api";

async function getCompanies() {
  const response = await apiClient.get("/companies");
  const data = response.data;

  return data;
}

const companiesAPI = {
  getCompanies,
};

export default companiesAPI;
