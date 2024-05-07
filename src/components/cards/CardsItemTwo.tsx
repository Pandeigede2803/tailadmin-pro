import Link from "next/link";
import Image from "next/image";
import { CardItemProps } from "@/types/cards";
import React from "react";

const CardsItemTwo: React.FC<CardItemProps> = ({
  cardImageSrc,
  cardTitle,
  cardContent,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <Link href="#" className="block px-4 pt-4">
        <Image width={432} height={238} src={cardImageSrc || ""} alt="Cards" />
      </Link>

      <div className="p-6">
        <h4 className="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href="#">{cardTitle}</Link>
        </h4>
        <p>{cardContent}</p>
      </div>
    </div>
  );
};

export default CardsItemTwo;
