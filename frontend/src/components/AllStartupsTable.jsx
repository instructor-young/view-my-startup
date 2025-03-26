import { useEffect, useState } from "react";
import API from "../api/index.api";
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

function AllStartupsTable() {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    API.companies
      .getCompanies()
      .then((companies) => companies.map((c, i) => ({ ranking: i + 1, ...c })))
      .then(setStartups);
  }, []);

  console.log(startups);

  return (
    <section>
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-xl">전체 스타트업 목록</h2>

          <SearchInput />
        </div>
      </header>

      <Table columns={columns} rows={startups} rowsPerPage={10} />
    </section>
  );
}

export default AllStartupsTable;
