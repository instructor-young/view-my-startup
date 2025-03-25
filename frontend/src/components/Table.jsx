import TableHeader from "./TableHeader";

function Table({ headers }) {
  return (
    <div>
      <TableHeader columns={headers} />
    </div>
  );
}

export default Table;
