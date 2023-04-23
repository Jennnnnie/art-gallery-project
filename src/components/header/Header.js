import React from "react";
import { Hero, ArrowR } from "./imports";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="art-gallery_section">
        <div className="art-gallery_container">
          <div className="art-gallery_black-background">
            <p>
              MODERN <br /> ART GALLERY
            </p>
          </div>
          <div className="art-gallery_hero-image">
            <img
              src={Hero}
              alt="hero-image"
              className="art-gallery_hero-image"
            />
            <p>
              MODERN <br /> ART GALLERY
            </p>
          </div>
          <div className="art-gallery_white-background">
            <p>
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <div className="art-gallery_buttons"></div>
            <button className="art-gallery_button">OUR LOCATION</button>
            <button className="art-gallery_right-arrow-button">
              <img src={ArrowR} alt="right-arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
