import Link from "next/link";

const ButtonsGroupOne: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Buttons Group
        </h3>
      </div>

      <div className="p-4 sm:p-5 xl:p-7.5">
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <Link
              href="#"
              className="inline-flex border border-primary bg-primary px-2 py-1 font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              About
            </Link>
            <Link
              href="#"
              className="inline-flex border-y border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="inline-flex border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              Services
            </Link>
          </div>

          <div className="flex items-center rounded-lg">
            <Link
              href="#"
              className="inline-flex rounded-l-lg border border-primary bg-primary px-2 py-1 font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              About
            </Link>
            <Link
              href="#"
              className="inline-flex border-y border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="inline-flex rounded-r-lg border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              Services
            </Link>
          </div>

          <div className="flex items-center rounded-full">
            <Link
              href="#"
              className="inline-flex rounded-l-full border border-primary bg-primary px-2 py-1 font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              About
            </Link>
            <Link
              href="#"
              className="inline-flex border-y border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="inline-flex rounded-r-full border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsGroupOne;
