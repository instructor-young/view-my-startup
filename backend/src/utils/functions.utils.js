/**
 * 특정 companyId를 기준으로 앞뒤 총 5개 항목을 반환
 *
 * @param {Array} companies - rank 필드가 포함된 전체 회사 목록 (정렬된 상태)
 * @param {string} targetId - 기준이 되는 company의 ID
 * @param {number} totalCount - 반환할 총 개수 (기본 5)
 * @returns {Array} - 기준을 중심으로 앞뒤 포함한 최대 totalCount개의 회사
 */
function getSurroundingCompanies(companies, targetId, totalCount = 5) {
  const index = companies.findIndex((c) => c.id === targetId);
  if (index === -1) return [];

  const half = Math.floor(totalCount / 2);

  let start = index - half;
  let end = index + half + 1;

  // 범위 초과 조정
  if (start < 0) {
    end += Math.abs(start);
    start = 0;
  }
  if (end > companies.length) {
    start = Math.max(0, start - (end - companies.length));
    end = companies.length;
  }

  return companies.slice(start, end);
}

module.exports = {
  getSurroundingCompanies,
};
