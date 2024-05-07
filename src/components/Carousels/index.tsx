"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CarouselTwo from "@/components/Carousels/CarouselTwo";
import CarouselOne from "@/components/Carousels/CarouselOne";
import CarouselThree from "@/components/Carousels/CarouselThree";

const Carousel: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Carousel" />

      <div className="flex flex-col gap-7.5">
        <CarouselOne />
        <CarouselTwo />
        <CarouselThree />
      </div>
    </>
  );
};

export default Carousel;
