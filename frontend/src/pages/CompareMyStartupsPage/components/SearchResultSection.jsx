import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination";

function SearchResultSection({ title, startups, renderRow }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const rowsPerPage = 5;

  useEffect(() => {
    const newRows = startups.slice(
      (currentPage - 1) * rowsPerPage,
      rowsPerPage * currentPage
    );

    setCurrentPageRows(newRows);
  }, [startups, currentPage]);

  return (
    <section>
      <h5 className="font-bold text-lg text-white mb-3">
        {title} ({startups.length})
      </h5>

      <ul className="space-y-3">
        {currentPageRows.map((startup) => (
          <li key={startup.id}>{renderRow(startup)}</li>
        ))}
      </ul>

      {startups.length > rowsPerPage && (
        <div className="flex justify-center mt-6">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPagesLength={Math.ceil(startups.length / rowsPerPage)}
            size="sm"
          />
        </div>
      )}
    </section>
  );
}

export default SearchResultSection;
