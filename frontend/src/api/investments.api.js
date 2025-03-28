import { apiClient } from "./index.api";

async function getInvestmentsOverview(dto) {
  const response = await apiClient.get("/investments", dto);
  const data = response.data;

  return data;
}

async function invest(dto) {
  const response = await apiClient.post("/investments", dto);
  const data = response.data;

  return data;
}

async function deleteInvestment(investmentId, password) {
  const response = await apiClient.delete(`/investments/${investmentId}`, {
    data: { password },
  });
  const data = response.data;

  return data;
}

const investmentsAPI = {
  getInvestmentsOverview,
  invest,
  deleteInvestment,
};

export default investmentsAPI;
