import { apiClient } from "./index.api";

async function getCompanies() {
  const response = await apiClient.get("/companies");
  const data = response.data;

  return data;
}

async function getCompany(companyId) {
  const response = await apiClient.get(`/companies/${companyId}`);
  const data = response.data;

  return data;
}

const companiesAPI = {
  getCompanies,
  getCompany,
};

export default companiesAPI;
