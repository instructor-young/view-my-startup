import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import API from "../../api/index.api";
import Page from "../../components/Page";
import SearchInput from "../../components/SearchInput";
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
  { label: "누적 투자금액 높은 순", value: "realInvestmentAmount,desc" },
  { label: "누적 투자금액 낮은 순", value: "realInvestmentAmount,asc" },
  { label: "매출액 높은 순", value: "revenue,desc" },
  { label: "매출액 낮은 순", value: "revenue,asc" },
  { label: "고용 인원 많은 순", value: "numberOfEmployees,desc" },
  { label: "고용 인원 낮은 순", value: "numberOfEmployees,asc" },
];

function HomePage() {
  const [searchParams] = useSearchParams();
  const [startups, setStartups] = useState([]);
  const initialSortOption =
    sortOptions.find(
      (sortOption) => sortOption.value === searchParams.get("orderBy")
    ) || sortOptions[0];
  const [selectedSortOption, setSelectedSortOption] =
    useState(initialSortOption);

  useEffect(() => {
    API.companies.getAllCompanies().then(setStartups);
  }, []);

  useEffect(() => {}, [searchParams]);

  const filteredStartups = useMemo(() => {
    const query = searchParams.get("query") || "";
    const newStartUps = startups.filter(
      (startup) =>
        startup.name.includes(query) ||
        startup.description.includes(query) ||
        startup.category.includes(query)
    );

    return newStartUps;
  }, [searchParams, startups]);

  const sortedStartups = useMemo(() => {
    let newStartUps = [];
    if (selectedSortOption.value === "realInvestmentAmount,desc") {
      newStartUps = [...filteredStartups].sort(
        (a, b) => b.realInvestmentAmount - a.realInvestmentAmount
      );
    } else if (selectedSortOption.value === "realInvestmentAmount,asc") {
      newStartUps = [...filteredStartups].sort(
        (a, b) => a.realInvestmentAmount - b.realInvestmentAmount
      );
    } else if (selectedSortOption.value === "revenue,desc") {
      newStartUps = [...filteredStartups].sort((a, b) => b.revenue - a.revenue);
    } else if (selectedSortOption.value === "revenue,asc") {
      newStartUps = [...filteredStartups].sort((a, b) => a.revenue - b.revenue);
    } else if (selectedSortOption.value === "numberOfEmployees,desc") {
      newStartUps = [...filteredStartups].sort(
        (a, b) => b.numberOfEmployees - a.numberOfEmployees
      );
    } else if (selectedSortOption.value === "numberOfEmployees,asc") {
      newStartUps = [...filteredStartups].sort(
        (a, b) => a.numberOfEmployees - b.numberOfEmployees
      );
    }

    newStartUps = newStartUps.map((c, i) => ({ ranking: i + 1, ...c }));

    return newStartUps;
  }, [filteredStartups, selectedSortOption]);

  return (
    <Page>
      <section>
        <header className="mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold text-xl">전체 스타트업 목록</h1>

            <div className="flex items-center gap-4">
              <SearchInput />
              <SortingDropdown
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
          rows={sortedStartups}
          rowsPerPage={10}
          enablePagination
        />
      </section>
    </Page>
  );
}

export default HomePage;
