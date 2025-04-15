import React from "react";
import "./Trending.css";
import TrendingCard from "../trendingCard/TrendingCard";
import PopularArtist from "../popularArtist/PopularArtist";

const Trending = () => {
  return (
    <div className="trendingSectionMainContainer">
      <span>Trending Songs</span>
      <TrendingCard />
    </div>
  );
};

export default Trending;
