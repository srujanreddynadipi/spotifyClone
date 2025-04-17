import React from "react";
import "./Trending.css";
import TrendingCard from "../trendingCard/TrendingCard";
import PopularArtist from "../popularArtist/PopularArtist";

const Trending = ({setcurrentPage ,setcurrentEle}) => {
  return (
    <div className="trendingSectionMainContainer">
      <span>Trending Songs</span>
      <TrendingCard setcurrentPage={setcurrentPage} setcurrentEle={setcurrentEle}/>
    </div>
  );
};

export default Trending;
