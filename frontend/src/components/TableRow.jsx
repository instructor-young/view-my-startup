import TableColumn from "./TableColumn";

function TableRow({ columns, row }) {
  return (
    <div className="flex border-gray-300 not-last:border-b">
      {columns.map((column) => (
        <TableColumn key={column.name} column={column} row={row} />
      ))}
    </div>
  );
}

export default TableRow;
