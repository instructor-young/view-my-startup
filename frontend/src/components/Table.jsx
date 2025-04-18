import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({
  columns,
  rows,
  rowsPerPage,
  enablePagination,
  getIsRowHighlighted,
}) {
  const [searchParams] = useSearchParams();
  const searchParamsPage = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(searchParamsPage);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const totalPagesLength = Math.ceil(rows.length / rowsPerPage);

  useEffect(() => {
    if (enablePagination) {
      const newRows = rows.slice(
        (currentPage - 1) * rowsPerPage,
        rowsPerPage * currentPage
      );

      setCurrentPageRows(newRows);
    } else {
      setCurrentPageRows(rows);
    }
  }, [enablePagination, rows, currentPage, rowsPerPage]);

  useEffect(() => {
    setCurrentPage(searchParamsPage);
  }, [searchParamsPage]);

  return (
    <div>
      <TableHeader columns={columns} />
      <TableBody
        columns={columns}
        rows={currentPageRows}
        getIsRowHighlighted={getIsRowHighlighted}
      />

      {enablePagination && (
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPagesLength={totalPagesLength}
            shouldUseSearchParams
          />
        </div>
      )}
    </div>
  );
}

export default Table;
