import React from "react";
import { Hero } from "./imports";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="art-gallery_section">
        <div className="art-gallery_container">
          <div className="art-gallery_left-split">
            <p>Modern Gallery</p>
          </div>
          <div className="art-gallery_right-split">
            <img src={Hero} alt="hero-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
