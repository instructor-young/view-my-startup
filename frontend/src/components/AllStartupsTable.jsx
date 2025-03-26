import { useEffect, useState } from "react";
import API from "../api/index.api";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import Table from "./Table";

const columns = [
  {
    name: "ranking",
    label: "순위",
    flex: 2,
    formatter: (value) => `${value}위`,
  },
  {
    name: "name",
    label: "기업명",
    flex: 6,
    getHref: (row) => `/startup/${row.id}`,
    renderCell: (row, column) => (
      <div className="flex items-center gap-x-3 w-full px-4">
        <div className="w-8 h-8 bg-amber-200 rounded-full" />
        {row[column.name]}
      </div>
    ),
  },
  {
    name: "description",
    label: "기업 소개",
    flex: 9,
    getHref: (row) => `/startup/${row.id}`,
  },
  { name: "category", label: "카테고리", flex: 5 },
  {
    name: "realInvestmentAmount",
    label: "누적 투자 금액",
    flex: 5,
    formatter: (value) => `${value}억 원`,
  },
  {
    name: "revenue",
    label: "매출액",
    flex: 5,
    formatter: (value) => `${value}억 원`,
  },
  {
    name: "numberOfEmployees",
    label: "고용 인원",
    flex: 5,
    formatter: (value) => `${value}명`,
  },
];

const sortOptions = [
  { label: "누적 투자금액 높은 순", value: "" },
  { label: "누적 투자금액 낮은 순", value: "" },
  { label: "매출액 높은 순", value: "" },
  { label: "매출액 낮은 순", value: "" },
  { label: "고용 인원 많은 순", value: "" },
  { label: "고용 인원 낮은 순", value: "" },
];

function AllStartupsTable() {
  const [startups, setStartups] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);

  useEffect(() => {
    API.companies
      .getCompanies()
      .then((companies) => companies.map((c, i) => ({ ranking: i + 1, ...c })))
      .then(setStartups);
  }, []);

  return (
    <section>
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-xl">전체 스타트업 목록</h2>

          <div className="flex items-center gap-4">
            <SearchInput />
            <Dropdown
              width={200}
              options={sortOptions}
              selectedOption={selectedSortOption}
              setSelectedOption={setSelectedSortOption}
            />
          </div>
        </div>
      </header>

      <Table
        columns={columns}
        rows={startups}
        rowsPerPage={10}
        enablePagination
      />
    </section>
  );
}

export default AllStartupsTable;
