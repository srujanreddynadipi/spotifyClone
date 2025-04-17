import React from "react";
import "./SpecificMusicFile.css";

const SpecificMusicFile = ({ currentEle }) => {
  return (
    <div>
      {currentEle ? (
        <div className="musicSpecificContainer">
          <img src={currentEle.imgsrc} alt={currentEle.heading || ""} />
          <h2>{currentEle.heading}</h2>
          <p>{currentEle.subheading}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SpecificMusicFile;
