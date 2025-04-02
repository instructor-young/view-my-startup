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

async function incrementPickAsMyStartup(companyId) {
  const response = await apiClient.put(
    `/companies/${companyId}/pick-as-my-startup`
  );
  const data = response.data;

  return data;
}

async function incrementPickAsComparisionStartups(companyIds) {
  const response = await apiClient.post(
    `/companies/pick-as-comparision-startups`,
    companyIds
  );
  const data = response.data;

  return data;
}

const companiesAPI = {
  getCompanies,
  getCompany,
  compareCompanies,
  getCompaniesWithRank,
  incrementPickAsMyStartup,
  incrementPickAsComparisionStartups,
};

export default companiesAPI;
