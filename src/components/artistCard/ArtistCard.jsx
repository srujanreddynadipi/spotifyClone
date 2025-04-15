import React from "react";
import "./ArtistCard.css";
import { popularArtist } from "../../config/config";

const ArtistCard = () => {
  return (
    <>
      <div className="artistCardMainContainer">
        {popularArtist.map((item, index) => (
          <div key={index} className="artistCardContainer">
            <img src={item.imgsrc} alt={item.heading} />
            <h3>{item.heading}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtistCard;
