import Pagination from "./Pagination";
import SearchInput from "./SearchInput";

function AllStartupsTable() {
  return (
    <section>
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-xl">전체 스타트업 목록</h2>

          <SearchInput />
        </div>
      </header>

      <div>
        {/* 테이블 헤더 */}
        <div className="bg-black-100 text-white h-10 flex rounded-sm text-sm font-medium">
          <div className="flex items-center justify-center flex-2">순위</div>
          <div className="flex items-center justify-center flex-6">기업명</div>
          <div className="flex items-center justify-center flex-9">
            기업 소개
          </div>
          <div className="flex items-center justify-center flex-5">
            카테고리
          </div>
          <div className="flex items-center justify-center flex-5">
            누적 투자 금액
          </div>
          <div className="flex items-center justify-center flex-5">매출액</div>
          <div className="flex items-center justify-center flex-5">
            고용 인원
          </div>
        </div>

        {/* 테이블 바디 */}
        <div className="bg-black-300 text-white rounded-sm text-sm mt-4">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div className="flex border-gray-300 not-last:border-b">
                <div className="flex items-center justify-center h-16 flex-2">
                  {i + 1}위
                </div>
                <div className="flex items-center justify-center h-16 flex-6">
                  코드잇
                </div>
                <div className="flex items-center justify-center h-16 flex-9">
                  코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech
                  스타트업입니다. 코딩 교육에 대한 수...
                </div>
                <div className="flex items-center justify-center h-16 flex-5">
                  에듀테크
                </div>
                <div className="flex items-center justify-center h-16 flex-5">
                  10억 원
                </div>
                <div className="flex items-center justify-center h-16 flex-5">
                  28억 원
                </div>
                <div className="flex items-center justify-center h-16 flex-5">
                  68명
                </div>
              </div>
            ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default AllStartupsTable;
