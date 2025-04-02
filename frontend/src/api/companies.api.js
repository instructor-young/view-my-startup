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

async function compareCompanies(companyId, dto) {
  const response = await apiClient.post(`/companies/${companyId}/compare`, dto);
  const data = response.data;

  return data;
}

async function getCompaniesWithRank(companyId, sorting) {
  const response = await apiClient.get(`/companies/${companyId}/rank`, {
    params: { sorting },
  });
  const data = response.data;

  return data;
}

const companiesAPI = {
  getCompanies,
  getCompany,
  compareCompanies,
  getCompaniesWithRank,
};

export default companiesAPI;
