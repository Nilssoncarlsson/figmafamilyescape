import React from "react";
import Login from './Login';
import { SearchButton } from "/Users/lisanilssoncarlsson/figmafamilyescape/src/components/SearchButton.jsx";
import "/Users/lisanilssoncarlsson/figmafamilyescape/src/homepage.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="overlap">
        <div className="logo">
          <img className="family-escapes" alt="Family escapes" src="family-escapes.svg" />
        </div>
        <Login className="login-instance" />
        <div className="search-bar">
          <div className="overlap-group">
            <div className="nr">
              <div className="div">datum?</div>
              <img className="simple-line-icons" alt="Simple line icons" src="simple-line-icons-calender.svg" />
            </div>
            <div className="vem">
              <div className="text-wrapper-2">gäster?</div>
              <img className="img" alt="Vector" src="vector-3.svg" />
            </div>
            <div className="vart">
              <img className="vector-2" alt="Vector" src="vector-4.svg" />
              <div className="destination">destination</div>
            </div>
            <img className="line" alt="Line" src="line-16.svg" />
            <img className="line-2" alt="Line" src="line-17.svg" />
          </div>
        </div>
        <SearchButton
          className="searchbutton-instance"
          divClassName="design-component-instance-node"
          property1="default"
          vector="vector-2.svg"
        />
      </div>
    </div>
  );
};


export default Header;
