export const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`
export const SINGLE_MOVIE = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}`
export const API_KEY = `${process.env.REACT_APP_KEY}`