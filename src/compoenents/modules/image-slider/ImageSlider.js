import React, { useEffect, useState } from "react";
import { imageSliderData } from "../../../mockData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  const prevClickHandler = () => {
    if (active === 0) {
      setActive(imageSliderData?.length - 1);
    } else {
      setActive((prev) => prev - 1);
    }
  };

  const nextClickHandler = () => {
    if (active === imageSliderData?.length - 1) {
      setActive(0);
    } else {
      setActive((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const i = setInterval(() => {
      nextClickHandler();
    }, 2000);

    return () => {
      clearInterval(i);
    };
  });

  return (
    <div className="slider-wrapper">
      <div className="left-slider">
        <KeyboardArrowLeftIcon onClick={prevClickHandler} />
      </div>
      <div className="slider-image-wrapper">
        <img src={imageSliderData[active]} alt="image-data" />
      </div>
      <div className="right-slider">
        <ChevronRightIcon onClick={nextClickHandler} />
      </div>
    </div>
  );
};

export default ImageSlider;
