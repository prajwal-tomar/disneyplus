import React from "react";
import { generesList } from "../constants/GeneresList";
import MovieList from "./MovieList";

const GeneresMovieList = () => {
  return (
    <div className="text-white px-5 md:px-16">
      {generesList.map((genre, index) => (
        <div key={genre.id}>
          <h1 className="text-2xl font-bold pt-5">{genre.name}</h1>
          <MovieList genreId={genre.id} index_={index} />
        </div>
      ))}
    </div>
  );
};

export default GeneresMovieList;
