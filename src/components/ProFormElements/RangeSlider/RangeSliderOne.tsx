import noUiSlider from "nouislider";
import { useEffect } from "react";

const RangeSliderOne = () => {
  useEffect(() => {
    const sliderOne = document.getElementById("rangeSliderOne") as any;

    noUiSlider.create(sliderOne, {
      start: [20],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });

    return () => {
      (sliderOne.noUiSlider as any).destroy();
    };
  }, []);

  return (
    <div className="rangeSliderCommon rangeSliderOne">
      <div id="rangeSliderOne"></div>
    </div>
  );
};

export default RangeSliderOne;
