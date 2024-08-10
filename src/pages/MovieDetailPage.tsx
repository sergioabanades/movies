import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movieService';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const loadMovie = async () => {
      if (id) {
        const data = await fetchMovieDetails(parseInt(id));
        setMovie(data);
      }
    };
    loadMovie();
  }, [id]);

  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>     
      <img width={80} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Link to="/">
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
            Volver a la Página Principal
        </button>
      </Link>
    </div>
  );
};

export default MovieDetailPage;
