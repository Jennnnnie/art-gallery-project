import React from "react";
import { Hero, ArrowR } from "./imports";
import "./header.css";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="art-gallery_header section">
        <div className="art-gallery_header-container">
          <div className="art-gallery_black-background">
            <p>
              MODERN <br /> ART GALLERY
            </p>
          </div>
          <div className="art-gallery_header-hero-image">
            <img src={Hero} alt="hero-image" />
          </div>
          <div className="art-gallery_white-background">
            <p>
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <button
              onClick={() => {
                navigate("/location");
              }}
              className="art-gallery_header-button"
            >
              OUR LOCATION &emsp; <img src={ArrowR} alt="right-arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
