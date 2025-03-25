import { cx } from "class-variance-authority";
import { Link } from "react-router";

function TableColumn({ column, row }) {
  const TagName = column.getHref ? Link : "div";
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
    <TagName
      to={column.getHref ? column.getHref(row) : undefined}
      className={cx(
        "flex items-center justify-center h-16",
        column.getHref && "text-white",
        getFlexClassname(column.flex)
      )}
    >
      {column.renderCell
        ? column.renderCell(row, column)
        : column.formatter
        ? column.formatter(row[column.name])
        : row[column.name]}
    </TagName>
  );
}

export default TableColumn;
