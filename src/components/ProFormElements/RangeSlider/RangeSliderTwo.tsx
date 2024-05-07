import noUiSlider from "nouislider";
import { useEffect } from "react";

const RangeSliderTwo = () => {
  useEffect(() => {
    const sliderTwo = document.getElementById("rangeSliderTwo") as any;

    noUiSlider.create(sliderTwo, {
      start: [20],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
    return () => {
      (sliderTwo.noUiSlider as any).destroy();
    };
  }, []);

  return (
    <div className="rangeSliderCommon rangeSliderTwo">
      <div id="rangeSliderTwo"></div>
    </div>
  );
};

export default RangeSliderTwo;
