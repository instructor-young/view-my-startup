import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ columns, rows, rowsPerPage, enablePagination }) {
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
    <div>
      <TableHeader columns={columns} />
      <TableBody columns={columns} rows={currentPageRows} />

      {enablePagination && (
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPagesLength={totalPagesLength}
          />
        </div>
      )}
    </div>
  );
}

export default Table;
