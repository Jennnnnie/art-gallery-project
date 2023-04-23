import "./App.css";

import { Header } from "./components";
import { Gallery } from "./components";
import { Footer } from "./components";

// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
