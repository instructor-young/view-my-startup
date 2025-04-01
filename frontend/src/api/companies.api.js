import { apiClient } from "./index.api";

async function getCompanies(search) {
  const response = await apiClient.get("/companies", { params: { search } });
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
