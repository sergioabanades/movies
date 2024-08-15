import React from 'react';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import './styles/Header.scss';

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
      <div className='title-header'>Alégrame el día!</div>
      <div className="search-bar">
        <SearchBar onSearch={onSearch} setQuery={setQuery} query={query} />
      </div>
      <div className="genre-filter">
        <GenreFilter onGenreChange={onGenreChange} selectedGenre={selectedGenre} />
      </div>
    </header>
  );
};

export default Header;
