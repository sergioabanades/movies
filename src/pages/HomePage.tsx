  import { fetchMovies } from '../services/movieService';
  import MovieCard from '../components/MovieCard';
  import SearchBar from '../components/SearchBar';
  import GenreFilter from '../components/GenreFilter';
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import { API_KEY } from '../configs/config';
  import { BASE_URL } from '../configs/config';
  import { Container, Row } from 'react-bootstrap'
  import Header from '../components/Header';
  import Grid from '@mui/material/Grid';
  import Footer from '../components/Footer';
  //import './HomePage.scss'; // Si tienes estilos adicionales para la página

  const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [query, setQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState<string>('');  
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1); // Estado para la página actual
    const [totalPages, setTotalPages] = useState<number>(0); // Estado para el total de páginas
    const [searchSource, setSearchSource] = useState<string>(''); // Nuevo estado para la fuente de búsqueda



    const handleSearch = async () => {
      setCurrentPage(1); // Reiniciar a la primera página en una nueva búsqueda
      setSelectedGenre(''); // Resetear el género seleccionado
      setSearchSource('searchbar'); // Indicar que la búsqueda proviene del SearchBar
      //console.log('Buscando:', query); // Agrega esto para verificar el valor de query
      await loadMovies(); 
  };

    const handleGenreChange = (genreId: string | number) => {
      setSelectedGenre(String(genreId));
      setQuery(''); // Resetear la búsqueda
      setCurrentPage(1); // Reiniciar la paginación
      setSearchSource('genre'); // Indicar que la búsqueda proviene del listado de géneros
      loadMovies(); 
    };
    
    const loadMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchMovies({ query, genreId: selectedGenre, page: currentPage, searchSource });

        if (data && data.results) { // Verifica que data y data.results estén definidos
          setMovies(data.results);
          setTotalPages(data.total_pages);
        } else {
          setMovies([]); // Restablece movies si no hay resultados
          setTotalPages(0); // Restablece totalPages si no hay resultados
        }
        
      } catch (error) {
        setError('Ocurrió un error al obtener las películas.');
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      loadMovies(); // Llamar a loadMovies cuando se cambie el género o la página actual
    }, [selectedGenre, currentPage, query, searchSource]); 

    return (
      <div>
      <Header 
        onSearch={handleSearch} 
        setQuery={setQuery} 
        query={query} 
        selectedGenre={selectedGenre} 
        onGenreChange={handleGenreChange} 
      />
        <div>
          {loading ? (
            <p>Cargando películas...</p>
          ) : (
            <Container>
              <Row>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </Row>
            </Container>
          )}
          {error && <p>{error}</p>}
        </div>

        {/* paginador */}
        {totalPages > 1 && movies.length > 0 && (
          <Footer 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        )}
      </div>
    );
  };

  export default HomePage;
