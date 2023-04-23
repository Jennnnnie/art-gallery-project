import React from "react";
import { Hero, ArrowR } from "./imports";
import "./header.css";

import { Navigate } from "react-router-dom";

const Header = () => {
  const [goToLocation, setGoToLocation] = React.useState(false);

  if (goToLocation) {
    return <Navigate to="/location" />;
  }

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
          </div>
          <div className="art-gallery_white-background">
            <p>
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <div className="art-gallery_buttons"></div>
            <Navigate to="/location" />
            <button
              onClick={() => {
                setGoToLocation(true);
              }}
              className="art-gallery_button"
              target="_blank"
              rel="noreferrer"
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
