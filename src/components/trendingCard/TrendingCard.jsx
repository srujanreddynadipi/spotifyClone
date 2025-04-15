import React from "react";
import "./TrendingCard.css";
import { TrendingCardData } from "../../config/config";

const TrendingCard = () => {
  return (
    <>
      <div className="trendingCardMainContainer">
        {TrendingCardData.map((item, index) => (
          <div key={index} className="cardContainer">
            <img src={item.imgsrc} alt={item.heading} />
            <h3>{item.heading}</h3>
            <p>{item.subheading}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingCard;
