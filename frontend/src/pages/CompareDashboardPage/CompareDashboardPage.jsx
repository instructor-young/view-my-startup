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
    name: "pickAsMyStartupCount",
    label: "나의 기업 선택 횟수",
    flex: 5,
    formatter: (value) => value.toLocaleString(),
  },
  {
    name: "pickAsComparisionCount",
    label: "비교 기업 선택 횟수",
    flex: 5,
    formatter: (value) => value.toLocaleString(),
  },
];

const sortOptions = [
  { label: "나의 기업 선택 횟수 높은 순", value: "pickAsMyStartupCount,desc" },
  { label: "나의 기업 선택 횟수 낮은 순", value: "pickAsMyStartupCount,asc" },
  {
    label: "비교 기업 선택 횟수 높은 순",
    value: "pickAsComparisionCount,desc",
  },
  { label: "비교 기업 선택 횟수 낮은 순", value: "pickAsComparisionCount,asc" },
];

function CompareDashboardPage() {
  const [searchParams] = useSearchParams();
  const [startups, setStartups] = useState([]);
  const initialSortOption =
    sortOptions.find(
      (sortOption) => sortOption.value === searchParams.get("orderBy")
    ) || sortOptions[0];
  const [selectedSortOption, setSelectedSortOption] =
    useState(initialSortOption);

  useEffect(() => {
    API.companies.getCompanies().then(setStartups);
  }, []);

  const sortedStartups = useMemo(() => {
    let newStartUps = [];
    if (selectedSortOption.value === "pickAsMyStartupCount,desc") {
      newStartUps = [...startups].sort(
        (a, b) => b.pickAsMyStartupCount - a.pickAsMyStartupCount
      );
    } else if (selectedSortOption.value === "pickAsMyStartupCount,asc") {
      newStartUps = [...startups].sort(
        (a, b) => a.pickAsMyStartupCount - b.pickAsMyStartupCount
      );
    } else if (selectedSortOption.value === "pickAsComparisionCount,desc") {
      newStartUps = [...startups].sort(
        (a, b) => b.pickAsComparisionCount - a.pickAsComparisionCount
      );
    } else if (selectedSortOption.value === "pickAsComparisionCount,asc") {
      newStartUps = [...startups].sort(
        (a, b) => a.pickAsComparisionCount - b.pickAsComparisionCount
      );
    }

    newStartUps = newStartUps.map((c, i) => ({ ranking: i + 1, ...c }));

    return newStartUps;
  }, [startups, selectedSortOption]);

  return (
    <Page>
      <section>
        <header className="mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold text-xl">비교 현황</h1>

            <SortingDropdown
              width={264}
              options={sortOptions}
              selectedOption={selectedSortOption}
              setSelectedOption={setSelectedSortOption}
            />
          </div>
        </header>

        <Table
          columns={columns}
          rows={sortedStartups}
          rowsPerPage={10}
          enablePagination
        />
      </section>
    </Page>
  );
}

export default CompareDashboardPage;
