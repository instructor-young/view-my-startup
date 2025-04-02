import TableRow from "./TableRow";

function TableBody({ columns, rows, getIsRowHighlighted }) {
  return (
    <div className="bg-black-300 text-gray-100 rounded-sm text-sm mt-4">
      {rows.map((row, index) => (
        <TableRow
          highlighted={
            getIsRowHighlighted ? getIsRowHighlighted(row) : undefined
          }
          key={row.id || index}
          columns={columns}
          row={row}
        />
      ))}
    </div>
  );
}

export default TableBody;
