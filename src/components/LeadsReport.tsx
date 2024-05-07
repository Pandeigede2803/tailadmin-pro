import Image from "next/image";
import DropdownDefault from "./Dropdowns/DropdownDefault";
import { Lead } from "@/types/Lead";

const leadsData: Lead[] = [
  {
    avatar: "/images/user/user-17.png",
    name: "Charlie Donin",
    email: "wdavis@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "lost",
  },
  {
    avatar: "/images/user/user-18.png",
    name: "Makenna Carder",
    email: "ltorres@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "active",
  },
  {
    avatar: "/images/user/user-19.png",
    name: "Talan Dokidis",
    email: "rtaylor@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "active",
  },
  {
    avatar: "/images/user/user-20.png",
    name: "Cheyenne Levin",
    email: "ebrown@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "active",
  },
  {
    avatar: "/images/user/user-21.png",
    name: "James Aminoff",
    email: "slee@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "lost",
  },
];

const LeadsReport: React.FC = () => {
  return (
    <div className="col-span-12">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 md:p-6 xl:p-7.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                Leads Report
              </h2>
            </div>
            <DropdownDefault />
          </div>
        </div>

        <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
          <div className="flex items-center gap-3">
            <div className="w-2/12 xl:w-3/12">
              <span className="font-medium">Name</span>
            </div>
            <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
              <span className="font-medium">Email</span>
            </div>
            <div className="hidden w-4/12 md:block xl:w-3/12">
              <span className="font-medium">Project</span>
            </div>
            <div className="hidden w-1/12 xl:block">
              <span className="font-medium">Duration</span>
            </div>
            <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
              <span className="font-medium">Status</span>
            </div>
            <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
              <span className="font-medium">Actions</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 xl:p-7.5">
          <div className="flex flex-col gap-7">
            {leadsData.map((lead, key) => (
              <div className="flex items-center gap-3" key={key}>
                <div className="w-2/12 xl:w-3/12">
                  <div className="flex items-center gap-4">
                    <div className="2xsm:h-11 2xsm:w-full 2xsm:max-w-11 2xsm:rounded-full">
                      <Image
                        src={lead.avatar}
                        alt="User"
                        width={44}
                        height={44}
                      />
                    </div>
                    <span className="hidden font-medium xl:block">
                      {lead.name}
                    </span>
                  </div>
                </div>
                <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                  <span className="font-medium">{lead.email}</span>
                </div>
                <div className="hidden w-4/12 md:block xl:w-3/12">
                  <span className="font-medium">{lead.project}</span>
                </div>
                <div className="hidden w-1/12 xl:block">
                  <span className="font-medium">{lead.duration} Days</span>
                </div>
                <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                  <span
                    className={`inline-block rounded  px-2.5 py-0.5 text-sm font-medium ${
                      lead.status === "lost"
                        ? "bg-red/[0.08] text-red"
                        : "bg-meta-3/[0.08] text-meta-3"
                    } `}
                  >
                    {lead.status === "lost" ? "Lost Lead" : "Active"}
                  </span>
                </div>
                <div className="hidden w-2/12 2xsm:block md:w-1/12">
                  <button className="mx-auto block hover:text-meta-1">
                    <svg
                      className="mx-auto fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z"
                        fill=""
                      />
                      <path
                        d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z"
                        fill=""
                      />
                      <path
                        d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z"
                        fill=""
                      />
                      <path
                        d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsReport;
