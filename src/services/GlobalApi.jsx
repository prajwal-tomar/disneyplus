import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=4147c548713cb67f5fcafb3c77124245";
const apiKey = "4147c548713cb67f5fcafb3c77124245";

export const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + apiKey
);

export const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);
