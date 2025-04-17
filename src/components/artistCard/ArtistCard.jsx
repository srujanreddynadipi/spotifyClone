import React from "react";
import "./ArtistCard.css";
import { popularArtist } from "../../config/config";

const ArtistCard = ({setcurrentPage ,setcurrentArtEle}) => {
  return (
    <>
      <div className="artistCardMainContainer">
        {popularArtist.map((item, index) => {
          const uniqueKey = `artist-${item.heading}-${index}`;
          return (
            <div key={uniqueKey} onClick={() => {
              setcurrentPage("artistSpecificPage");
              setcurrentArtEle(item)
            }} className="artistCardContainer">
              <div className="imageContainer">
                <img src={item.imgsrc} alt={item.heading} />
                <div className="playButtonContainer">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="#4CAF50" />
                    <path d="M40,30 Q40,30 42,31 L68,48 Q72,50 68,52 L42,69 Q40,70 40,67 Z" fill="black" />
                  </svg>
                </div>
              </div>
              <h3>{item.heading}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArtistCard;
