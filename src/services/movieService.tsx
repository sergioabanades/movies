import axios from 'axios';
import { API_KEY } from '../configs/config';
import { BASE_URL } from '../configs/config';


export const fetchMovies = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
