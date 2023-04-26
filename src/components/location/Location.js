import React from "react";
import { map, ArrowL, Facebook, Instagram, Twitter } from "./imports";
import "./location.css";

import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="art-gallery_location section">
        <div className="art-gallery_location-container">
          <div className="art-gallery_location-map">
            <img src={map} alt="location-map" />
            <button
              onClick={() => {
                navigate("/");
              }}
              className="art-gallery_location-button"
            >
              <img src={ArrowL} alt="left-arrow" /> &emsp; BACK TO HOME
            </button>
          </div>
          <div className="art-gallery_location-our-location">
            <h1>OUR LOCATION</h1>
            <h2>99 King Street</h2>
            <p className="art-gallery_location-address">
              Newport <br /> RI 02840 <br />
              United States of America
            </p>
            <p className="art-gallery_location-description">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </p>
          </div>
          <div className="art-gallery_location-footer">
            <h1>
              MODERN <br /> ART GALLERY
            </h1>
            <p>
              The Modern Art Gallery is free to all visitors and open seven days
              a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </p>
            <div className="art-gallery_location-footer-icons">
              <img
                src={Facebook}
                alt="facebook-icon"
                className="facebook-icon"
              />
              <img
                src={Instagram}
                alt="instagram-icon"
                className="instagram-icon"
              />
              <img src={Twitter} alt="twitter-icon" className="twitter-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
