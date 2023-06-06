import React from "react";
import { img1, img2, img3 } from "./imports";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <article className="container">
        <div className="grid">
          <div className="top-feature-left">
            <h2 className="heading-m">Your Day At The Gallery</h2>
            <p className="body-m">
              Wander through our distinct collections and find new about our
              artists. Dive into the details of their creative process.
            </p>
          </div>

          <picture className="top-feature-right">
            <img src={img1} alt="Art Gallery Exposition" />
          </picture>

          <picture className="left-feature">
            <img src={img2} alt="Art Gallery seat" />
          </picture>

          <picture className="right-feature-1">
            <img src={img3} alt="Art Gallery People" />
          </picture>

          <div className="right-feature-2">
            <h2 className="heading-m white">Come & Be Inspired</h2>
            <p className="body-m-white">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Gallery;
