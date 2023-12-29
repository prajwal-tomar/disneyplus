import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GeneresMovieList from "./components/GenresMovieList";
const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductionHouse />
      <GeneresMovieList />
    </>
  );
};

export default App;
