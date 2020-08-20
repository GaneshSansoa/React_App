import React from "react";
import TableColumns from "./TableColumns";
import TableBody from "./TableBody";
const Table = (props) => {
  const { tableClasses, columns, onSort, sortColumn, data } = props;
  return (
    <table className={tableClasses}>
      <TableColumns columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
