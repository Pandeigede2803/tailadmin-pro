import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  Column,
} from "react-table";

interface Employee {
  name: string;
  position: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
}

const dataTwo: Employee[] = [
  {
    name: "Brielle Kuphal",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "25",
    startDate: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Barney Murray",
    position: "Senior Backend Developer",
    office: "amsterdam",
    age: "29",
    startDate: "2010/05/01",
    salary: "$424,785",
  },
  {
    name: "Ressie Ruecker",
    position: "Senior Frontend Developer",
    office: "Jakarta",
    age: "27",
    startDate: "2013/07/01",
    salary: "$785,210",
  },
  {
    name: "Teresa Mertz",
    position: "Senior Designer",
    office: "New Caledonia",
    age: "25",
    startDate: "2014/05/30",
    salary: "$532,126",
  },
  {
    name: "Chelsey Hackett",
    position: "Product Manager",
    office: "NewYork",
    age: "26",
    startDate: "2011/09/30",
    salary: "$421,541",
  },
  {
    name: "Tatyana Metz",
    position: "Senior Product Manager",
    office: "NewYork",
    age: "28",
    startDate: "2009/09/30",
    salary: "$852,541",
  },
  {
    name: "Oleta Harvey",
    position: "Junior Product Manager",
    office: "California",
    age: "25",
    startDate: "2015/10/30",
    salary: "$654,444",
  },
  {
    name: "Bette Haag",
    position: "Junior Product Manager",
    office: "Carolina",
    age: "29",
    startDate: "2017/12/31",
    salary: "$541,111",
  },
  {
    name: "Meda Ebert",
    position: "Junior Web Developer",
    office: "Amsterdam",
    age: "27",
    startDate: "2015/10/31",
    salary: "$651,456",
  },
  {
    name: "Elissa Stroman",
    position: "Junior React Developer",
    office: "Kuala Lumpur",
    age: "29",
    startDate: "2008/05/31",
    salary: "$566,123",
  },
  {
    name: "Sid Swaniawski",
    position: "Senior React Developer",
    office: "Las Vegas",
    age: "29",
    startDate: "2009/09/01",
    salary: "$852,456",
  },
  {
    name: "Madonna Hahn",
    position: "Senior Vue Developer",
    office: "New York",
    age: "27",
    startDate: "2006/10/01",
    salary: "$456,147",
  },
  {
    name: "Waylon Kihn",
    position: "Senior HTML Developer",
    office: "Amsterdam",
    age: "23",
    startDate: "2017/11/01",
    salary: "$321,254",
  },
  {
    name: "Jaunita Lindgren",
    position: "Senior Backend Developer",
    office: "Jakarta",
    age: "25",
    startDate: "2018/12/01",
    salary: "$321,254",
  },
  {
    name: "Lenora MacGyver",
    position: "Junior HTML Developer",
    office: "Carolina",
    age: "27",
    startDate: "2015/09/31",
    salary: "$852,254",
  },
  {
    name: "Edyth McCullough",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "25",
    startDate: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Ibrahim Stroman",
    position: "Senior Backend Developer",
    office: "amsterdam",
    age: "29",
    startDate: "2010/05/01",
    salary: "$424,785",
  },
  {
    name: "Katelynn Reichert",
    position: "Senior Frontend Developer",
    office: "Jakarta",
    age: "27",
    startDate: "2013/07/01",
    salary: "$785,210",
  },
  {
    name: "Logan Kiehn",
    position: "Senior Designer",
    office: "New Caledonia",
    age: "25",
    startDate: "2014/05/30",
    salary: "$532,126",
  },
  {
    name: "Rogers Stanton",
    position: "Product Manager",
    office: "NewYork",
    age: "26",
    startDate: "2011/09/30",
    salary: "$421,541",
  },
  {
    name: "Alanis Torp",
    position: "Senior Product Manager",
    office: "NewYork",
    age: "28",
    startDate: "2009/09/30",
    salary: "$852,541",
  },
  {
    name: "Jarvis Bauch",
    position: "Junior Product Manager",
    office: "California",
    age: "25",
    startDate: "2015/10/30",
    salary: "$654,444",
  },
  {
    name: "Trey Ritchie",
    position: "Junior Product Manager",
    office: "Carolina",
    age: "29",
    startDate: "2017/12/31",
    salary: "$541,111",
  },
  {
    name: "Ronny Dietrich",
    position: "Junior Web Developer",
    office: "Amsterdam",
    age: "27",
    startDate: "2015/10/31",
    salary: "$651,456",
  },
  {
    name: "Isabella Christiansen",
    position: "Junior React Developer",
    office: "Kuala Lumpur",
    age: "29",
    startDate: "2008/05/31",
    salary: "$566,123",
  },
];

// table header
const columns: Column<Employee>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Office",
    accessor: "office",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Start Date",
    accessor: "startDate",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];

const DataTableTwo = () => {
  const data = useMemo(() => dataTwo, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <section className="data-table-common data-table-two rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between border-b border-stroke px-8 pb-4 dark:border-strokedark">
        <div className="w-100">
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full rounded-md border border-stroke px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center font-medium">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-transparent pl-2"
          >
            {[5, 10, 20, 50].map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <p className="pl-2 text-black dark:text-white">Entries Per Page</p>
        </div>
      </div>

      <table
        {...getTableProps()}
        className="datatable-table w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
      >
        <thead>
          {headerGroups.map((headerGroup, key) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={key}>
              {headerGroup.headers.map((column, key) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={key}
                >
                  <div className="flex items-center">
                    <span> {column.render("Header")}</span>

                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill="" />
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={key}>
                {row.cells.map((cell, key) => {
                  return (
                    <td {...cell.getCellProps()} key={key}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between border-t border-stroke px-8 pt-5 dark:border-strokedark">
        <p className="font-medium">
          Showing {pageIndex + 1} 0f {pageOptions.length} pages
        </p>
        <div className="flex">
          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-whiter"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                fill=""
              />
            </svg>
          </button>

          {pageOptions.map((_page, index) => (
            <button
              key={index}
              onClick={() => {
                gotoPage(index);
              }}
              className={`${
                pageIndex === index && "bg-primary text-white"
              } mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-primary hover:text-white`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataTableTwo;
