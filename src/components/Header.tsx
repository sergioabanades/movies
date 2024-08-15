import React from 'react';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import './styles/Header.scss';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  onSearch: () => Promise<void>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string; 
  selectedGenre: string; 
  onGenreChange: (genreId: number) => void; 
}

const Header: React.FC<HeaderProps> = ({ onSearch, setQuery, query, selectedGenre, onGenreChange }) => {
  return (
    <header className="header"> 
      <Tooltip title="El actor Clint Eastwood popularizó la coletilla 'Anda, alégrame el día' en la cuarta entrega de 'Harry el sucio'." className="title-header" arrow>
        <Typography variant="h5" className="movie-title">
          "¡Anda, alégrame el día!"
        </Typography>
      </Tooltip>
      <div ></div>
      <div className="search-genre-wrapper">
        <div className="search-bar">
          <SearchBar onSearch={onSearch} setQuery={setQuery} query={query} />
        </div>
        <div className="genre-filter">
          <GenreFilter onGenreChange={onGenreChange} selectedGenre={selectedGenre} />
        </div>
      </div>
    </header>

  );
};

export default Header;
