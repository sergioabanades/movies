import { fetchMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import GenreFilter from '../components/GenreFilter';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../configs/config';
import { BASE_URL } from '../configs/config';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSearch = async () => {
    const results = await fetchMovies(query);
    setMovies(results);
  };


  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const params = {
                api_key: API_KEY,
                language: 'es-ES', 
                with_genres: selectedGenre, 
            };

            const response = await axios.get(`${BASE_URL}/discover/movie`, { params });
            setMovies(response.data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    fetchMovies();
}, [selectedGenre]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} setQuery={setQuery} />
      {/* <Filter setFilter={setFilter} /> */}
      <GenreFilter onGenreChange={(genre: string | number) => setSelectedGenre(String(genre))} />
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
