import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movieService';
import '../components/styles/MovieDetail.scss';
import Button from '@mui/material/Button';


const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const navigate = useNavigate();

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
    <div className="movie-detail-container">
      <div className="movie-detail">
        <img
          className="movie-detail__poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-detail__info">
          <h1 className="movie-detail__title">{movie.title}</h1>
          <p className="movie-detail__tagline">{movie.tagline}</p>
          <p className="movie-detail__overview">{movie.overview}</p>
          <p>
            <strong>Géneros:</strong> {movie.genres.map((genre: any) => genre.name).join(', ')}
          </p>
          <p>
            <strong>Fecha de lanzamiento:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Calificación:</strong> {movie.vote_average} / 10
          </p>
        </div>
      </div>
      
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/')}
        className="back-button"
      >
        Volver al inicio
      </Button>
    </div>
  );
};

export default MovieDetailPage;
