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
            <div className="playButtonContainer">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#4CAF50" />
                  <path d="M40,30 Q40,30 42,31 L68,48 Q72,50 68,52 L42,69 Q40,70 40,67 Z" fill="black" />
                </svg>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingCard;
