import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import './styles/MovieCard.scss';


const MovieCard = ({ movie }: { movie: any }) => {

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Col md={4} className="mb-4">
      <div className="movie-card">
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          onClick={handleViewDetails}
        />
        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-description">{movie.overview}</p>
          <Button size="small" color="primary" onClick={handleViewDetails}>
          Ver más
        </Button>
        </div>
      </div>
    </Col>
  );
};

export default MovieCard;
