import React from "react";

interface ColumnFilterProps {
  column: {
    filterValue: string;
    setFilter: (value: string) => void;
  };
}

const ColumnFilter: React.FC<ColumnFilterProps> = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div className="mt-2.5 w-full">
      <input
        type="text"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        className="w-full rounded-md border border-stroke px-3 py-1 outline-none focus:border-primary"
      />
    </div>
  );
};

export default ColumnFilter;
