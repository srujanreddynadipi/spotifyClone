import React from "react";
import "./Sidebar.css";

const Cards = (
  {
   heading,
   subheading,
   buttontext, 
  }
) => {
  return <div className="sideBarMiddleCards">
    <h1>{heading}</h1>
    <p>{subheading}</p>
    <button>{buttontext}</button>
  </div>;
};

export default Cards;
