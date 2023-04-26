import React from "react";
import "./App.css";

import { Homepage } from "./components";
import { Location } from "./components";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
