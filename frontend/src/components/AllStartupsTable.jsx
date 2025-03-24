function AllStartupsTable() {
  return (
    <section>
      <header className="mb-4">
        <h2 className="text-white font-bold text-xl">전체 스타트업 목록</h2>
      </header>

      <div>
        <div className="bg-black-100 text-white h-10 flex rounded-sm text-sm font-medium">
          <div className="flex items-center justify-center flex-1">순위</div>
          <div className="flex items-center justify-center flex-3">기업명</div>
          <div className="flex items-center justify-center flex-[4.5]">
            기업 소개
          </div>
          <div className="flex items-center justify-center flex-[2.5]">
            카테고리
          </div>
          <div className="flex items-center justify-center flex-[2.5]">
            누적 투자 금액
          </div>
          <div className="flex items-center justify-center flex-[2.5]">
            매출액
          </div>
          <div className="flex items-center justify-center flex-[2.5]">
            고용 인원
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllStartupsTable;
