import React, { useEffect, useState, useRef } from "react";
import { getMovieByGenreId } from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HorizontalMovieCard from "./HorizontalMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getMovieByGenreIdFun();
  }, []);

  const getMovieByGenreIdFun = () => {
    getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  const sliderRight = () => {
    elementRef.current.scrollLeft += window.innerWidth - 500;
  };

  const sliderLeft = () => {
    elementRef.current.scrollLeft -= window.innerWidth - 500;
  };

  return (
    <>
      <div>
        <HiChevronLeft
          className={`hidden md:block text-white text-3xl absolute ${
            index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"
          } cursor-pointer left-0 mx-5`}
          onClick={sliderLeft}
        />
        <HiChevronRight
          className={`hidden md:block text-white text-4xl absolute ${
            index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"
          } cursor-pointer mx-5 right-0`}
          onClick={sliderRight}
        />
      </div>
      <div
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth p-4 pb-8"
        ref={elementRef}
      >
        {movieList.map((movie) =>
          index_ % 3 === 0 ? (
            <HorizontalMovieCard movie={movie} />
          ) : (
            <MovieCard movie={movie} />
          )
        )}
      </div>
    </>
  );
};

export default MovieList;
