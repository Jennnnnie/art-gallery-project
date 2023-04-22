import React from "react";
import { img1, img2, img3 } from "./imports";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="art-gallery_gallery section">
        <div className="art-gallery_gallery-container">
          <div className="art-gallery_gallery-images">
            <h1>Your Day at the Gallery</h1>
            <p>
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
            <img src={img1} alt="art-studio" className="img1" />
            <img src={img2} alt="art-painting-bench" className="img2" />
            <img src={img3} alt="art-gallery-showing" className="img3" />
            <div className="art-gallery_gallery-information">
              <h1>COME & BE INSPIRED</h1>
              <p>
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
