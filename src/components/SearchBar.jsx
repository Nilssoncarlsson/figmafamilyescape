import React from "react";
import "/Users/lisanilssoncarlsson/figmafamilyescape/src/homepage.css";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="overlap-group">
        <div className="nr">
          <div className="text-wrapper">datum?</div>
          <img className="simple-line-icons" alt="Simple line icons" src="simple-line-icons-calender.svg" />
        </div>
        <div className="vem">
          <div className="div">gäster?</div>
          <img className="vector" alt="Vector" src="vector.svg" />
        </div>
        <div className="vart">
          <img className="img" alt="Vector" src="image.svg" />
          <div className="destination">destination</div>
        </div>
        <img className="line" alt="Line" src="line-16.svg" />
        <img className="line-2" alt="Line" src="line-17.svg" />
      </div>
    </div>
  );
};


  
  export default SearchBar;