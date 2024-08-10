import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>ID: {movie.id}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
