import React from "react";
import "./Sidebar.css";
import Cards from "./Cards";

const Sidebar = () => {
  const texts = [
    "Legal ",
    "Security",
    "Privacy",
    "Cookies",
    "Advertising",
    "About",
    "Help",
  ];
  return (
    <div className="sidebarMainContainer">
      <div className="sideBarTopSection">
        <h1>Your Library</h1>
        <p>+</p>
      </div>
      <div className="sideBarMiddleSection">
        <Cards
          heading="Create your first playlist"
          subheading="it's easy we  will help you "
          buttontext="Create Playlist"
        />
        <Cards
          heading="Lets find some podcast to follow"
          subheading="will keep you updated on new episodes"
          buttontext="Browse Podcast"
        />
      </div>
      <div className="sideBarBottomSection">
        <div className="sideBarBottomSectionTopContainer">
          {texts.map((ele) => {
            return <p>{ele}</p>;
          })}
          <p>Legal</p>
        </div>
        <div className="sideBarBottomSectionBottomContainer"> </div>
      </div>
    </div>
  );
};

export default Sidebar;
