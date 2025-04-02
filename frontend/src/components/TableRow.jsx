import TableColumn from "./TableColumn";

function TableRow({ columns, row, highlighted }) {
  return (
    <div
      data-is-highlighted={highlighted}
      className="flex border-gray-300 not-last:border-b data-[is-highlighted=true]:bg-black-100 first-of-type:rounded-t-sm last-of-type:rounded-b-sm"
    >
      {columns.map((column) => (
        <TableColumn key={column.name} column={column} row={row} />
      ))}
    </div>
  );
}

export default TableRow;
