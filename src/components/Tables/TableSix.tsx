import React from "react";
import DropdownFour from "@/components/Dropdowns/DropdownFour";

interface TableData {
  name: string;
  position: string;
  email: string;
  role: string;
}

const data: TableData[] = [
  {
    name: "Musharof Chowdhury",
    position: "Multidisciplinary Web Entrepreneur",
    email: "musharof@example.com",
    role: "Owner",
  },
  {
    name: "Naimur Rahman",
    position: "Website Front-end Developer",
    email: "naimurrahman@example.com",
    role: "Member",
  },
  {
    name: "Shafiq Hammad",
    position: "Regional Paradigm Technician",
    email: "shafiq.hd@example.com",
    role: "Moderator",
  },
  {
    name: "Alex Semuyel",
    position: "Applications Engineer",
    email: "alex.semuel@example.com",
    role: "Admin",
  },
];

const TableSix: React.FC = () => {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="min-w-[1170px]">
        {/* table header start */}
        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-3">
            <h5 className="font-medium text-white">Name</h5>
          </div>

          <div className="col-span-3">
            <h5 className="font-medium text-white">Position</h5>
          </div>

          <div className="col-span-3">
            <h5 className="font-medium text-white">Email</h5>
          </div>

          <div className="col-span-2">
            <h5 className="font-medium text-white">Role</h5>
          </div>

          <div className="col-span-1">
            <h5 className="text-right font-medium text-white">Edit</h5>
          </div>
        </div>
        {/* table header end */}

        {/* table body start */}
        <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
            >
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">{item.name}</p>
              </div>

              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.position}
                </p>
              </div>

              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.email}
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-[#637381] dark:text-bodydark">{item.role}</p>
              </div>
              <div className="relative col-span-1">
                <DropdownFour
                  classes={
                    index < 2
                      ? "top-full mt-1"
                      : index >= data.length - 2
                        ? "bottom-full mb-1"
                        : ""
                  }
                />
              </div>
            </div>
          ))}
        </div>
        {/* table body end */}
      </div>
    </div>
  );
};

export default TableSix;
