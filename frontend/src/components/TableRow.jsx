import { cx } from "class-variance-authority";

function TableRow({ columns, row }) {
  const getFlexClassname = (flex) =>
    cx(
      flex === 1 && "flex-1",
      flex === 2 && "flex-2",
      flex === 3 && "flex-3",
      flex === 4 && "flex-4",
      flex === 5 && "flex-5",
      flex === 6 && "flex-6",
      flex === 7 && "flex-7",
      flex === 8 && "flex-8",
      flex === 9 && "flex-9",
      flex === 10 && "flex-10",
      flex === 11 && "flex-11",
      flex === 12 && "flex-12"
    );

  return (
    <div className="flex border-gray-300 not-last:border-b">
      {columns.map((column) => (
        <div
          className={cx(
            "flex items-center justify-center h-16",
            getFlexClassname(column.flex)
          )}
        >
          {column.formatter
            ? column.formatter(row.values[column.name])
            : row.values[column.name]}
        </div>
      ))}
    </div>
  );
}

export default TableRow;
