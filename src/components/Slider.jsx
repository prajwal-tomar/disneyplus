import React, { useEffect, useState, useRef } from "react";
import { getTrendingVideos } from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    getTrendingVideos.then((res) => {
      console.log(res.data.results[0]);
      setMovieList(res.data.results);
    });
  };

  const sliderRight = () => {
    elementRef.current.scrollLeft += window.innerWidth - 100;
  };

  const sliderLeft = () => {
    elementRef.current.scrollLeft -= window.innerWidth - 100;
  };

  return (
    <>
      <div>
        <HiChevronLeft
          className="hidden md:block text-white text-4xl absolute mt-[190px] cursor-pointer mx-5"
          onClick={sliderLeft}
        />
        <HiChevronRight
          className="hidden md:block text-white text-4xl absolute mt-[190px] cursor-pointer mx-5 right-0"
          onClick={sliderRight}
        />
      </div>

      {/* Slider  */}
      <div
        className="flex overflow-x-auto w-full md:px-16 px-6 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie) => (
          <img
            src={IMAGE_BASE_URL + movie.backdrop_path}
            alt="movie_bg"
            className="min-w-full object-cover md:h-[410px] object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-300 transition-all duration-100 ease-in"
            key={movie.id}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
