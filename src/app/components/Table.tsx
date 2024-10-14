import React from "react";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type TableProps = {
  columns: Column[];
  data: any[];
  renderRow: (item: any) => React.ReactNode; // Function to render a row for each Teacher
};

const Table: React.FC<TableProps> = ({ columns, data, renderRow }) => {
  return (
    <div>
      <table className="w-full mt-4 ">
        <thead>
          <tr className="text-sm text-left text-gray-500 ">
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>{renderRow(item)}</React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
