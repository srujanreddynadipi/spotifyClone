import React from "react";
import "./MainSection.css";
import Trending from "../trending/Trending";
import PopularArtist from "../popularArtist/PopularArtist";

const MainSection = () => {
  return (
    <div className="main-section">
      <Trending />
      <PopularArtist />
    </div>
  );
};

export default MainSection;
