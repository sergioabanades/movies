import axios from 'axios';
import { API_KEY, BASE_URL } from '../configs/config';


interface FetchMoviesParams {
  query: string;
  genreId: string | number;
  page: number;
  searchSource: string;
}

export const fetchMovies = async ({ query, genreId, page, searchSource }: FetchMoviesParams) => {
  const params = {
      api_key: API_KEY,
      language: 'es-ES',
      page,
      with_genres: searchSource === 'genre' ? genreId : undefined, // Solo incluir el género si proviene del filtro
      query: searchSource === 'searchbar' ? query : undefined, // Solo incluir la query si proviene del SearchBar
  };

  let pathDestiny: string = searchSource === 'genre' ? '/discover/movie' : '/search/movie';

  const response = await axios.get(`${BASE_URL}${pathDestiny}`, { params });
  return response.data;
};

export const fetchMovieDetails = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'es-ES'
    },
  });
  return response.data;
};
