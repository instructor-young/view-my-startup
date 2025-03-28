import { apiClient } from "./index.api";

async function invest(dto) {
  const response = await apiClient.post("/investments", dto);
  const data = response.data;

  return data;
}

const investmentsAPI = {
  invest,
};

export default investmentsAPI;
