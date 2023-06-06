import React from "react";
import { Hero, ArrowR } from "./imports";
import "./header.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero-section-wrapper">
        <img
          className="hero-image-mobile"
          src={Hero}
          alt="Art Gallery Picture"
        />
        <div className="container">
          <div className="hero-section">
            <h1 className="heading-xl h1-heading">Modern Art Gallery</h1>
            <div className="hero-text">
              <p className="body-m hero-paragraph pb-64">
                The arts in the collection of the Modern Art Gallery all started
                from a spark of inspiration. Will these pieces inspire you?
                Visit us and find out.
              </p>
              <div className="btn">
                <Link className="btn-link" to="/location">
                  Our Location
                </Link>
                <Link className="arrow-right" to="/location">
                  <img src={ArrowR} alt="Arrow Button" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
