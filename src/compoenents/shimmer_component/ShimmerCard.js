import React from "react";
import "./ShimmerCard.css";

const ShimmerCard = () => {
  return Array(20)
    .fill(0)
    .map((el, index) => (
      <div key={index} className="shimmer-card-wrapper"></div>
    ));
};

export default ShimmerCard;
