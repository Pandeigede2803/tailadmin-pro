"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AccordionOne from "@/components/Accordions/AccordionOne";
import AccordionTwo from "@/components/Accordions/AccordionTwo";

const Accordion: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Accordion" />

      <div className="flex flex-col gap-7.5">
        <AccordionOne />
        <AccordionTwo />
      </div>
    </>
  );
};

export default Accordion;
