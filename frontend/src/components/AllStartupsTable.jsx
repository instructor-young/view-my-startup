import { allStartUps } from "../data/samples";
import SearchInput from "./SearchInput";
import Table from "./Table";

function AllStartupsTable() {
  return (
    <section>
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-xl">전체 스타트업 목록</h2>

          <SearchInput />
        </div>
      </header>

      <Table columns={allStartUps.columns} rows={allStartUps.rows} />
    </section>
  );
}

export default AllStartupsTable;
