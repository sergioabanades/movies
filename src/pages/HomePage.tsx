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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1); // Estado para la página actual
  const [totalPages, setTotalPages] = useState<number>(0); // Estado para el total de páginas


  const handleSearch = async () => {
    const data = await fetchMovies(query);
    setTotalPages(data.total_pages);   
    setMovies(data.results);
  };


  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const params = {
                api_key: API_KEY,
                language: 'es-ES', 
                with_genres: selectedGenre, 
                page: currentPage
            };

            const response = await axios.get(`${BASE_URL}/discover/movie`, { params });
            setTotalPages(response.data.total_pages);        
            setMovies(response.data.results);
        } catch (error) {
            console.error('Error retornando películas:', error);
        }
    };

    fetchMovies();
}, [selectedGenre, currentPage]);

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

      {/* Paginación */}
      <div>
        <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
        >
            Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
        >
            Siguiente
        </button>
    </div>

    </div>
  );
};

export default HomePage;
