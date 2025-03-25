import TableRow from "./TableRow";

function TableBody({ columns, rows }) {
  return (
    <div className="bg-black-300 text-white rounded-sm text-sm mt-4">
      {rows.map((row) => (
        <TableRow columns={columns} row={row} />
      ))}
    </div>
  );
}

export default TableBody;
