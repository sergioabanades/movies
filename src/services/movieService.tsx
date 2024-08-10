import axios from 'axios';

const API_KEY = '0eca087dc00a8d46e2179d780d4ada5a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
