import React, { useState } from "react";
import "./MainSection.css";
import Trending from "../trending/Trending";
import PopularArtist from "../popularArtist/PopularArtist";
import SpecificMusicFile from "../../pages/specificMusicPage/specificMusicFile";
import ArtistSpecificPage from "../../pages/artistSpecificPage/ArtistSpecificPage"

const MainSection = () => {
  const [currentPage, setcurrentPage] = useState("home");
  const [currentEle, setcurrentEle] = useState(null);
  const [currentArtEle, setcurrentArtEle] = useState(null)
  return (
    <div className="main-section">
      {currentPage === "home" ? (
        <>
          <Trending
            setcurrentPage={setcurrentPage}
            setcurrentEle={setcurrentEle}
          />
          <PopularArtist
            setcurrentPage={setcurrentPage}
            setcurrentArtEle={setcurrentArtEle}
          />
        </>
      ) : currentPage === "musicSpecificPage" ? (
        <SpecificMusicFile currentEle={currentEle} />
      ) : currentPage === "artistSpecificPage" ? (
        <ArtistSpecificPage currentArtEle={currentArtEle} />
      ) : (
        Null
      )}
    </div>
  );
};

export default MainSection;
