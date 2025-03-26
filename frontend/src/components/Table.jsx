import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ columns, rows, rowsPerPage }) {
  const [page, setPage] = useState(1);
  const [currentPageRows, setCurrentPageRows] = useState([]);

  useEffect(() => {
    const newRows = rows.slice((page - 1) * rowsPerPage, rowsPerPage * page);

    setCurrentPageRows(newRows);
  }, [rows, page, rowsPerPage]);

  return (
    <div>
      <TableHeader columns={columns} />
      <TableBody columns={columns} rows={currentPageRows} />

      <div className="mt-10 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default Table;
