import React from "react";
import "./homepage.css";

import { Header } from "../index";
import { Gallery } from "../index";
import { Footer } from "../index";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Homepage;
