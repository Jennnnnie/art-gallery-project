import React from "react";
import { Facebook, Instagram, Twitter } from "./imports";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="art-gallery_footer section">
        <div className="art-gallery_footer-container">
          <div className="art-gallery_footer-information">
            <h1>MODERN ART GALLERY</h1>
            <p>
              The Modern Art Gallery is free to all visitors and open seven days
              a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </p>
            <div className="art-gallery_footer-icons">
              <img src={Facebook} alt="facebook-icon" />
              <img src={Instagram} alt="instagram-icon" />
              <img src={Twitter} alt="twitter-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
