const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const api = {
  getPopularMovies: async (page: number = 1) => {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.json();
  },

  getTopRatedMovies: async (page: number = 1) => {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.json();
  },

  getUpcomingMovies: async (page: number = 1) => {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.json();
  },

  getMovieDetails: async (movieId: string) => {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.json();
  },

  getMovieCredits: async (movieId: string) => {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.json();
  },

  searchMovies: async (query: string, page: number = 1) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    );
    return response.json();
  },
};

export const getImageUrl = (path: string) => `${IMAGE_BASE_URL}${path}`;