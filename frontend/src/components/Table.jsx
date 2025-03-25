import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ columns, rows }) {
  return (
    <div>
      <TableHeader columns={columns} />
      <TableBody columns={columns} rows={rows} />

      <div className="mt-10 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default Table;
