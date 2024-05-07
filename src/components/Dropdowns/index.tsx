"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DropdownsTwo from "@/components/Dropdowns/DropdownsTwo";
import DropdownsOne from "@/components/Dropdowns/DropdownsOne";
import DropdownsThree from "@/components/Dropdowns/DropdownsThree";

const Dropdowns: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Dropdowns" />

      <div className="flex flex-col gap-7.5">
        <DropdownsOne />
        <DropdownsTwo />
        <DropdownsThree />
      </div>
    </>
  );
};

export default Dropdowns;
