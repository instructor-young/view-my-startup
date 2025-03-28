import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import API from "../../api/index.api";
import Page from "../../components/Page";
import SortingDropdown from "../../components/SortingDropdown";
import Table from "../../components/Table";

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
        {row.logoImgUrl ? (
          <img
            src={row.logoImgUrl}
            className="size-8 rounded-full object-cover"
          />
        ) : (
          <div className="size-8 bg-amber-200 rounded-full" />
        )}

        {row[column.name]}
      </div>
    ),
  },
  {
    name: "description",
    label: "기업 소개",
    flex: 9,
    renderCell: (row, column) => (
      <p className="line-clamp-2">{row[column.name]}</p>
    ),
  },
  { name: "category", label: "카테고리", flex: 5 },
  {
    name: "totalVirtualInvestmentAmount",
    label: "View My Startup 투자 금액",
    flex: 5,
    formatter: (value) => `${value}억 원`,
  },
  {
    name: "realInvestmentAmount",
    label: "실제 누적 투자 금액",
    flex: 5,
    formatter: (value) => `${value}억 원`,
  },
];

const sortOptions = [
  {
    label: "View My Startup 투자 금액 높은 순",
    value: "totalVirtualInvestmentAmount,desc",
  },
  {
    label: "View My Startup 투자 금액 낮은 순",
    value: "totalVirtualInvestmentAmount,asc",
  },
  { label: "실제 누적 투자금액 높은 순", value: "realInvestmentAmount,desc" },
  { label: "실제 누적 투자금액 낮은 순", value: "realInvestmentAmount,asc" },
];

function DashboardPage() {
  const [searchParams] = useSearchParams();
  const [startups, setStartups] = useState([]);
  const initialSortOption =
    sortOptions.find(
      (sortOption) => sortOption.value === searchParams.get("orderBy")
    ) || sortOptions[0];
  const [selectedSortOption, setSelectedSortOption] =
    useState(initialSortOption);

  useEffect(() => {
    API.investments.getInvestmentsOverview().then(setStartups);
  }, []);

  const sortedStartups = useMemo(() => {
    let newStartUps = [];

    if (selectedSortOption.value === "totalVirtualInvestmentAmount,desc") {
      newStartUps = [...startups].sort(
        (a, b) =>
          b.totalVirtualInvestmentAmount - a.totalVirtualInvestmentAmount
      );
    } else if (
      selectedSortOption.value === "totalVirtualInvestmentAmount,asc"
    ) {
      newStartUps = [...startups].sort(
        (a, b) =>
          a.totalVirtualInvestmentAmount - b.totalVirtualInvestmentAmount
      );
    } else if (selectedSortOption.value === "realInvestmentAmount,desc") {
      newStartUps = [...startups].sort(
        (a, b) => b.realInvestmentAmount - a.realInvestmentAmount
      );
    } else if (selectedSortOption.value === "realInvestmentAmount,asc") {
      newStartUps = [...startups].sort(
        (a, b) => a.realInvestmentAmount - b.realInvestmentAmount
      );
    }

    newStartUps = newStartUps.map((c, i) => ({ ranking: i + 1, ...c }));

    return newStartUps;
  }, [startups, selectedSortOption]);

  return (
    <Page>
      <div className="flex items-center justify-between  mb-4">
        <h1 className="h-12 font-bold text-xl text-white flex items-center">
          투자 현황
        </h1>

        <SortingDropdown
          options={sortOptions}
          selectedOption={selectedSortOption}
          setSelectedOption={setSelectedSortOption}
          width={300}
        />
      </div>

      <Table
        columns={columns}
        rows={sortedStartups}
        enablePagination
        rowsPerPage={10}
      />
    </Page>
  );
}

export default DashboardPage;
