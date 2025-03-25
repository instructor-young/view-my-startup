import { cx } from "class-variance-authority";

function TableHeader({ columns }) {
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
    <div className="bg-black-100 text-white h-10 flex rounded-sm text-sm font-medium">
      {columns.map((column) => (
        <div
          className={cx(
            "flex items-center justify-center",
            getFlexClassname(column.flex)
          )}
        >
          {column.label}
        </div>
      ))}
    </div>
  );
}

export default TableHeader;
